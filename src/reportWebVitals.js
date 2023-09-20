/*
<<<<<<< HEAD
👥 Team Members:
👤 Igal Khalfin    313190811
👤 Itay Halaf      205585193
👤 Tamara Slotzki  318875846
=======
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
>>>>>>> 459bf6253ebd4d8d42c6aa50d634d643251e112f
*/

// This function reports web vitals performance data if provided a callback.
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
