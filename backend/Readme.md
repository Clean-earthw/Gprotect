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
 
 
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

2. **Create a virtual environment**


pip install -r requirements.txt

#4. Set Up Google API Credentials

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

# Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**:
   - Click the **Fork** button on the top right of the repository page on GitHub.

2. **Create a new branch**:
   - Open a terminal and run:
     ```bash
     git checkout -b feature/your-feature
     ```

3. **Make your changes and commit**:
   - After making your changes, add and commit them:
     ```bash
     git add .
     git commit -am 'Add new feature'
     ```

4. **Push to the branch**:
   - Push your changes to the remote repository:
     ```bash
     git push origin feature/your-feature
     ```

5. **Create a new Pull Request**:
   - Go to the repository on GitHub.
   - Click **Compare & pull request** next to your branch.
   - Provide a clear description of your changes and submit the pull request.

# Tuning a Model with Google Gemini Studio

To fine-tune a model with Google Gemini Studio, follow these steps:

##  Import Data into Google Gemini Studio

1. **Open Google Gemini Studio**: Navigate to the [Google Gemini Studio](https://console.cloud.google.com/gemini) and log in with your credentials.
   
2. **Create a New Tune Model**:
   - Click on **Create New Tune Model**.

3. **Import Data**:
   - Select **Import Data** and choose the CSV data source. 

   ![Import Data](path/to/your/image1.png)  
   *Screenshot showing the import data screen.*

4. **Configure Data**:
   - Choose the input and output parameters based on your data.

   ![Configure Data](path/to/your/image2.png)  
   *Screenshot showing how to configure input and output parameters.*

5. **Enter Model Details**:
   - Provide a name and description for your model.

6. **Choose Your Model**:
   - Select the base model you want to use for fine-tuning.

7. **Tune the Model**:
   - Click **Tune Model** to start the training process.

## Testing Sample Prompts

1. **Navigate to Test Section**:
   - After tuning, go to the **Test** section of Google Gemini Studio.

2. **Test Sample Prompts**:
   - Input sample prompts to evaluate the performance of your tuned model.

   - Observe the results and make adjustments if necessary.

## Additional Resources

For more details and advanced configurations, refer to the [Google Gemini Studio Documentation](https://developers.google.com/gemini).

# Contact

For any questions or support, please contact:

- **Email**: [tonynesh9@gmail.com](mailto:tonynesh9@gmail.com)
- **GitHub**: [Clean-Earthw](https://github.com/Clean-earthw/Gprotect/)


