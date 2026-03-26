/*
  Google Apps Script to append contact form submissions to a Google Sheet.
  - Copy this file into a new Apps Script project (https://script.google.com)
  - Set the PROJECT'S script properties if you want token protection (optional)
  - Deploy > New deployment > Web app
    - Execute as: Me
    - Who has access: Anyone
  - Copy the Web app URL and paste it into the Contact form (in the site or into Contact.js)

  This script will append rows with columns:
  [Timestamp, Name, Email, Subject, Message]
*/

const SHEET_ID = '1q0bZh7DSjGk4-nl0Rs1n5Y_qOLD2LdYVnrl9U25pTUM'; // your spreadsheet ID
const REQUIRE_TOKEN = false; // set to true to enable simple token protection
const SECRET_TOKEN = 'CHANGE_ME_TO_A_RANDOM_SECRET';

function doPost(e) {
  try {
    // Parse incoming JSON body
    var body = {};
    if (e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // fallback for form-encoded
      body = e.parameter;
    }

    // Optional token check to reduce spam
    if (REQUIRE_TOKEN && body.token !== SECRET_TOKEN) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid token' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var name = body.name || '';
    var email = body.email || '';
    var subject = body.subject || '';
    var message = body.message || '';
    var timestamp = new Date();

    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheets()[0]; // first sheet (Sheet1) - change if needed

    sheet.appendRow([timestamp, name, email, subject, message]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
