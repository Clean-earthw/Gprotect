# GProtect

GProtect is a backend service designed to analyze emails and determine whether they are phishing attempts or safe communications. It utilizes the Gemini API and Gemini Tune models for analysis and integrates with the Gmail API to process user emails.

## Overview

GProtect leverages advanced AI models from Google’s Gemini suite to detect potentially harmful phishing emails. By integrating with the Gmail API, the service can access and analyze email content to ensure user safety.

## Technologies

- **Python**: The primary programming language used for the backend service.
- **Flask**: A lightweight web framework used to build the API endpoints.
- **Google Generative AI**: Provides the underlying AI models for analyzing email content.
- **Gemini API**: Used for email analysis with advanced models.
- **Gmail API**: Allows access to users' emails for analysis.

## Features

- **Email Analysis**: Uses Gemini Tune models to assess the safety of incoming emails.
- **Phishing Detection**: Identifies and flags potential phishing attempts.
- **Integration with Gmail**: Retrieves and processes emails from users' Gmail accounts.

## Installation

### Prerequisites

- Python 3.8 or higher
- Pip (Python package installer)
- Google API credentials (Gmail and Gemini)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/gprotect.git
   cd gprotect

2. **Create a virtual environment**
 
  ```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. **Install dependencies**

 ```bash
pip install -r requirements.txt

4.**Set up Google API credentials**

# Set Up Google API Credentials

Follow these steps to obtain and configure your Google API credentials:

1. **Enable APIs and Services**:
   - Visit the [Google Cloud Console](https://console.cloud.google.com/apis).
   - Select your project or create a new one.
   - Go to the **Library** tab.
   - Search for and enable the **Gmail API** and any other required APIs.

2. **Create OAuth 2.0 Credentials**:
   - Navigate to the **Credentials** tab.
   - Click **Create Credentials** and select **OAuth 2.0 Client ID**.
   - Configure the OAuth consent screen if prompted.
   - Select **Web application** as the application type.
   - Add authorized redirect URIs if required.
   - Download the JSON file containing your credentials.

3. **Download Credentials**: Save the downloaded JSON file as `credentials.json` and place it in the root directory of the project.

For detailed instructions on setting up OAuth 2.0 credentials, refer to the [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2).
