const PDFDocument = require('pdfkit');
const fs = require('fs');

class PDFService {
  generateEventReport(event) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`event_${event._id}.pdf`));
    
    doc.fontSize(25).text(`Event: ${event.name}`, { align: 'center' });
    doc.fontSize(20).text(`Date: ${event.date}`, { align: 'center' });
    
    event.sessions.forEach(session => {
      doc.fontSize(15).text(`Session: ${session.title}`);
      doc.text(`Start Time: ${session.startTime}`);
      doc.text(`End Time: ${session.endTime}`);
    });
    
    doc.end();
  }
}

module.exports = new PDFService();
