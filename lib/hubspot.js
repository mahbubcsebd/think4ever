export const HUBSPOT_PORTAL_ID = '343174040';

// Replace these with your actual HubSpot Form IDs (GUIDs) from HubSpot Dashboard
export const HUBSPOT_CONTACT_FORM_ID = 'YOUR_CONTACT_FORM_ID_HERE'; 
export const HUBSPOT_START_FREE_FORM_ID = 'YOUR_START_FREE_FORM_ID_HERE';

/**
 * Submits form fields directly to HubSpot Forms API.
 * @param {string} formId - HubSpot Form GUID
 * @param {Object} fields - Form field key-value pairs
 */
export const submitToHubSpot = async (formId, fields) => {
  if (!formId || formId.includes('YOUR_')) {
    console.warn(`HubSpot submission skipped: Form ID is not configured.`);
    return false;
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${formId}`;

  // Get HubSpot UTK cookie for page tracking attribution
  let hutk;
  if (typeof document !== 'undefined') {
    const match = document.cookie.match(/hubspotutk=([^;]+)/);
    if (match) hutk = match[1];
  }

  const formattedFields = Object.entries(fields).map(([name, value]) => {
    // If array (e.g. checkbox options), join with semicolon
    const valStr = Array.isArray(value) ? value.join('; ') : String(value);
    return { name, value: valStr };
  });

  const payload = {
    fields: formattedFields,
    context: {
      hutk,
      pageUri: typeof window !== 'undefined' ? window.location.href : '',
      pageName: typeof window !== 'undefined' ? document.title : '',
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch (error) {
    console.error('HubSpot API error:', error);
    return false;
  }
};
