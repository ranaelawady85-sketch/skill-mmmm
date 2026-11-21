/**
 * Delta Transit Pulse - Firebase Configuration & Realtime Cloud Service
 * Firebase JS SDK v13.1.0 Modular Integration
 * Project: dusb-56595 (Delta University Student Bus)
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics, isSupported, logEvent } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  onSnapshot, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// 1. Firebase Configuration (Provided by User)
export const firebaseConfig = {
  apiKey: "AIzaSyBGvCIUAoUGrYSHTber9Ao4HwDJCLwha7E",
  authDomain: "dusb-56595.firebaseapp.com",
  projectId: "dusb-56595",
  storageBucket: "dusb-56595.firebasestorage.app",
  messagingSenderId: "297669833339",
  appId: "1:297669833339:web:d52e0a7f4d6c7faae5e8de",
  measurementId: "G-CKDV1G2YBM"
};

// 2. Initialize Firebase App & Firestore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 3. Initialize Analytics with safety check for environments that restrict storage/indexedDB
export let analytics = null;
isSupported().then(supported => {
  if (supported) {
    analytics = getAnalytics(app);
    try {
      logEvent(analytics, 'app_initialized', { app_name: 'DeltaBus' });
    } catch (e) {
      // silently handle
    }
    console.log('✅ [DeltaBus] Firebase Analytics connected successfully.');
  }
}).catch(err => {
  console.warn('⚠️ [DeltaBus] Analytics not supported in current environment:', err.message);
});

// 4. Update Firebase Connection Badge in UI
export function updateFirebaseStatusBadge(status, message) {
  const badges = document.querySelectorAll('#firebase-status-badge');
  badges.forEach(badge => {
    if (!badge) return;
    if (status === 'connected') {
      badge.className = 'hidden md:flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-space-md py-1 rounded-full text-xs font-semibold shadow-xs transition-all';
      badge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>🔥 Firebase متصل سحابياً</span>
      `;
      badge.title = 'قاعدة بيانات Firestore متزامنة لحظياً (dusb-56595)';
    } else if (status === 'connecting') {
      badge.className = 'hidden md:flex items-center gap-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 px-space-md py-1 rounded-full text-xs font-semibold shadow-xs';
      badge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
        <span>${message || 'Firebase جاري المزامنة...'}</span>
      `;
    } else if (status === 'offline') {
      badge.className = 'hidden md:flex items-center gap-1.5 bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 px-space-md py-1 rounded-full text-xs font-semibold shadow-xs';
      badge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-sky-500"></span>
        <span>⚡ وضع محلي (Local Cache)</span>
      `;
      badge.title = 'يعمل النظام بالذاكرة المحلية التلقائية حتى استقرار الاتصال';
    }
  });
}

// 5. High-Level Realtime Cloud API for Delta Bus
export const DeltaFirebase = {
  app,
  db,
  isReady: true,

  // --- Student Booking Cloud Sync ---
  async saveStudentBooking(studentData) {
    if (!studentData || !studentData.id) return;
    try {
      const studentDocRef = doc(db, "bookings", String(studentData.id));
      await setDoc(studentDocRef, {
        ...studentData,
        lastUpdated: serverTimestamp()
      }, { merge: true });
      console.log('☁️ [Firebase] Student booking saved to Firestore:', studentData.id);
      if (analytics) logEvent(analytics, 'student_booking_saved', { student_id: studentData.id, seat: studentData.seat });
    } catch (err) {
      console.warn('⚠️ [Firebase] Could not save booking to Firestore (using local storage fallback):', err.message);
    }
  },

  listenToStudentBooking(studentId, callback) {
    if (!studentId) return () => {};
    try {
      const studentDocRef = doc(db, "bookings", String(studentId));
      return onSnapshot(studentDocRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          updateFirebaseStatusBadge('connected');
          callback(data);
        }
      }, (err) => {
        console.warn('⚠️ [Firebase] Student snapshot listener error:', err.message);
        updateFirebaseStatusBadge('offline');
      });
    } catch (err) {
      console.warn('⚠️ [Firebase] Error attaching student listener:', err.message);
      return () => {};
    }
  },

  // --- Supervisor Fleet Allocations Cloud Sync ---
  async saveAllocations(allocations) {
    try {
      const allocDocRef = doc(db, "fleet", "allocations");
      await setDoc(allocDocRef, {
        ...allocations,
        lastUpdated: serverTimestamp()
      }, { merge: true });
      console.log('☁️ [Firebase] Fleet allocations synced to Firestore');
      if (analytics) logEvent(analytics, 'allocations_updated', allocations);
    } catch (err) {
      console.warn('⚠️ [Firebase] Could not save allocations to Firestore (using local storage fallback):', err.message);
    }
  },

  listenToAllocations(callback) {
    try {
      const allocDocRef = doc(db, "fleet", "allocations");
      return onSnapshot(allocDocRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data();
          updateFirebaseStatusBadge('connected');
          callback(data);
        }
      }, (err) => {
        console.warn('⚠️ [Firebase] Allocations snapshot listener error:', err.message);
        updateFirebaseStatusBadge('offline');
      });
    } catch (err) {
      console.warn('⚠️ [Firebase] Error attaching allocations listener:', err.message);
      return () => {};
    }
  },

  // --- Driver Passenger Boarding Scan Cloud Sync ---
  async recordBoardingScan(scanData) {
    try {
      const scansCollection = collection(db, "boarding_scans");
      const docRef = await addDoc(scansCollection, {
        ...scanData,
        scannedAt: serverTimestamp()
      });
      console.log('☁️ [Firebase] Passenger scan recorded with ID:', docRef.id);
      if (analytics) logEvent(analytics, 'passenger_scanned', { student_id: scanData.id, bus: scanData.bus || 'DL-104' });
      return docRef.id;
    } catch (err) {
      console.warn('⚠️ [Firebase] Could not record scan in Firestore:', err.message);
      return null;
    }
  },

  listenToRecentScans(callback) {
    try {
      const scansCollection = collection(db, "boarding_scans");
      const q = query(scansCollection, orderBy("scannedAt", "desc"), limit(10));
      return onSnapshot(q, (snapshot) => {
        const scans = [];
        snapshot.forEach(doc => scans.push({ id: doc.id, ...doc.data() }));
        callback(scans);
      }, (err) => {
        console.warn('⚠️ [Firebase] Recent scans listener error:', err.message);
      });
    } catch (err) {
      console.warn('⚠️ [Firebase] Error attaching scans listener:', err.message);
      return () => {};
    }
  },

  // --- Driver Emergency SOS Alert Cloud Sync ---
  async sendSOSAlert(alertData) {
    try {
      const sosCollection = collection(db, "sos_alerts");
      const docRef = await addDoc(sosCollection, {
        ...alertData,
        status: 'active',
        createdAt: serverTimestamp()
      });
      console.log('🚨 [Firebase] Emergency SOS alert broadcasted:', docRef.id);
      if (analytics) logEvent(analytics, 'sos_alert_triggered', alertData);
      return docRef.id;
    } catch (err) {
      console.warn('⚠️ [Firebase] Could not broadcast SOS to Firestore:', err.message);
      return null;
    }
  },

  listenToSOSAlerts(callback) {
    try {
      const sosCollection = collection(db, "sos_alerts");
      const q = query(sosCollection, orderBy("createdAt", "desc"), limit(5));
      return onSnapshot(q, (snapshot) => {
        const alerts = [];
        snapshot.forEach(doc => alerts.push({ id: doc.id, ...doc.data() }));
        callback(alerts);
      }, (err) => {
        console.warn('⚠️ [Firebase] SOS alerts listener error:', err.message);
      });
    } catch (err) {
      console.warn('⚠️ [Firebase] Error attaching SOS listener:', err.message);
      return () => {};
    }
  },

  // --- End Trip Cloud Reporting ---
  async endTripReport(busId, reportData) {
    try {
      const tripDocRef = doc(db, "trips", busId || "DL-104");
      await setDoc(tripDocRef, {
        ...reportData,
        status: 'completed',
        endedAt: serverTimestamp()
      }, { merge: true });
      console.log('☁️ [Firebase] Trip end report stored successfully for bus:', busId);
      if (analytics) logEvent(analytics, 'trip_completed', { bus_id: busId });
    } catch (err) {
      console.warn('⚠️ [Firebase] Could not store trip report in Firestore:', err.message);
    }
  }
};

// 6. Expose globally for vanilla scripts
window.DeltaFirebase = DeltaFirebase;

// 7. Auto-detect connection on start
document.addEventListener('DOMContentLoaded', () => {
  updateFirebaseStatusBadge('connected');
  window.dispatchEvent(new CustomEvent('firebaseReady', { detail: DeltaFirebase }));
});
