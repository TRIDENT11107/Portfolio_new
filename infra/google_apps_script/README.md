Deploy Google Apps Script (quick guide)

1. Open https://script.google.com and create a new project.
2. Replace the default Code.gs content with the contents of `append_contact.gs` in this folder.
3. (Optional) If you want to enable a simple shared-secret token for submissions, set `REQUIRE_TOKEN = true` and change `SECRET_TOKEN` to a random string in the script. Add the same token to the frontend request body.
4. Save the project.
5. Click "Deploy" → "New deployment".
   - Select "Web app".
   - Execute as: "Me".
   - Who has access: "Anyone" (or "Anyone with the link").
6. Click "Deploy" and authorize the script when prompted.
7. Copy the Web app URL shown in the deployment modal. It looks like:
   https://script.google.com/macros/s/AKfycbxxx.../exec
8. Open `src/components/Contact.js` and set the `GOOGLE_SHEETS_ENDPOINT` constant to that URL.
9. Run your site locally and submit the contact form to verify a new row appears in the sheet.

Troubleshooting
- If you see a permissions error, re-open the Deploy dialog and re-authorize the script's scopes.
- If responses are not appending, ensure the sheet ID at the top of `append_contact.gs` matches your Sheet and that the sheet has at least one tab.
- For better security, enable `REQUIRE_TOKEN` and only send requests that include the token from your frontend.
