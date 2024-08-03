import React from 'react';
import Navbar from '@/components/Navbar';

const Terms: React.FC = () => {
  return (
    <div>
    <Navbar/>
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>GProtect Terms and Conditions</h1>

      <p>Last updated: [Date]</p>

      <h2>1. Introduction</h2>
      <p>Welcome to GProtect. By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.</p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>"App"</strong> refers to GProtect.</li>
        <li><strong>"We", "Us", "Our"</strong> refers to the owners, developers, and operators of GProtect.</li>
        <li><strong>"You", "User"</strong> refers to the individual or entity using GProtect.</li>
      </ul>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>You must be at least 13 years old to use this app.</li>
        <li>You are responsible for ensuring the security of your device and for any activity that occurs under your account.</li>
        <li>You agree not to misuse the app or help anyone else to do so. Misuse includes using the app for any illegal or unauthorized purpose.</li>
      </ul>

      <h2>4. Use of the App</h2>
      <ul>
        <li>GProtect is designed to help users identify phishing emails through AI. It does not guarantee absolute protection from phishing attacks.</li>
        <li>You agree to use GProtect at your own risk, and we will not be liable for any loss or damage resulting from the use of the app.</li>
        <li>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the app without express written permission from us.</li>
      </ul>

      <h2>5. Privacy Policy</h2>
      <p>We collect, store, and use your data in accordance with our Privacy Policy. By using the app, you consent to such processing and you warrant that all data provided by you is accurate. We do not share your data with third parties without your consent, except as required by law.</p>

      <h2>6. Intellectual Property</h2>
      <p>The app and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and user content (the "GProtect Content"), and all intellectual property rights related thereto, are the exclusive property of GProtect and its licensors. You agree not to engage in the use, copying, or distribution of any of the GProtect Content other than expressly permitted herein.</p>

      <h2>7. Termination</h2>
      <p>We may terminate or suspend your access to GProtect without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the app will immediately cease.</p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>The app is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the app will be uninterrupted, secure, or error-free.</p>

      <h2>9. Limitation of Liability</h2>
      <p>In no event shall GProtect, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your use or inability to use the app; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; (iii) any interruption or cessation of transmission to or from the app; (iv) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the app by any third party; (v) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the app; and/or (vi) the defamatory, offensive, or illegal conduct of any third party.</p>

      <h2>10. Changes to These Terms</h2>
      <p>We may update our Terms and Conditions from time to time. You are advised to review this page periodically for any changes. Changes to these Terms and Conditions are effective when they are posted on this page.</p>

      <h2>11. Governing Law</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>

      <h2>12. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at [Your Contact Information].</p>

      <p>By using GProtect, you agree to these Terms and Conditions. If you do not agree, do not use the app.</p>
    </div>
    </div>
  );
};

export default Terms;
