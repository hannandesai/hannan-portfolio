# README: React-Based Portfolio Website on AWS Cloud Architecture

## Introduction
This project showcases the development of a React-based portfolio website leveraging AWS cloud architecture. The solution integrates modern web development practices with cloud engineering principles to deliver a scalable, secure, and responsive portfolio application. The project utilizes React (via Vite.js) for frontend development and several AWS services for hosting, security, and functionality.

![portfolio](https://github.com/user-attachments/assets/7696d8d8-9f67-4921-8c0f-2e642e3a8355)

---

## Project Overview

### Technology Stack
- **Frontend**: React with Vite.js, Bootstrap for styling and responsiveness.
- **Backend**: Serverless architecture powered by AWS Lambda and API Gateway.
- **Hosting and Distribution**: Amazon S3 for static site hosting, Amazon CloudFront for content delivery.
- **Domain Management**: Amazon Route 53 for DNS configuration and custom domains.
- **Security**: AWS Certificate Manager (ACM) for SSL/TLS certificates, CloudFront for HTTPS enforcement.
- **Automation**: GitHub Actions CI/CD pipeline for seamless deployment.
- **Interactivity**: AI-powered chatbot using Amazon Lex, with context managed in DynamoDB.
- **Contact Handling**: API Gateway, Lambda, and Amazon SES for handling contact form submissions.

---

## Development Process

### 1. Frontend Development
The website frontend was developed using React, a powerful JavaScript library for building user interfaces. Vite.js was used as the build tool, providing faster development and optimized production builds. Key steps include:
- **Project Initialization**: The project was bootstrapped using `npm create vite@latest`. React was selected as the framework, and dependencies were installed using `npm install`.
- **Component-Based Design**: The site features reusable components for scalability and maintainability.
- **Styling**: Bootstrap was integrated for responsive and professional styling.
- **Production Build**: The production build was generated using `npm run build`, outputting optimized static assets.

### 2. Hosting on AWS S3 and CloudFront
- **Static Hosting**: The built React application was hosted on Amazon S3, leveraging its scalability and cost-efficiency for static websites.

  <img width="1426" alt="image" src="https://github.com/user-attachments/assets/7136f602-dea3-4a57-a864-218e98b20973" />

  <img width="1426" alt="image" src="https://github.com/user-attachments/assets/094f4c4b-1a11-40a5-acb2-3477416da814" />


- **Content Delivery**: Amazon CloudFront was configured as a Content Delivery Network (CDN), ensuring low latency and high availability through globally distributed edge locations.

  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/e464e559-30d4-48f5-b025-99e560d12db2" />

- **HTTPS Security**: AWS Certificate Manager provided SSL/TLS certificates to enforce HTTPS for secure data transmission.

  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/9be649a2-1e16-4c6c-a082-aa5cc39c809e" />

  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/9ac509c4-503d-4cec-859c-205a13728ecd" />

### 3. Domain Setup with Route 53
- **Custom Domain**: Amazon Route 53 was used to register and configure the custom domain for the portfolio website.
- **DNS Configuration**: DNS records were updated to route traffic to the CloudFront distribution, enabling secure and professional access to the site.

  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/b1e45200-6a83-46e7-94ed-fd829efb10ed" />

### 4. Interactive Features and Serverless Backend
- **Contact Form**:
  - Users submit messages through a form integrated into the React frontend.
    
    <img width="1440" alt="image" src="https://github.com/user-attachments/assets/b060ccd6-d759-4f8a-bca5-9a735d6bb79b" />

  - API Gateway routes form submissions to a Lambda function.
    
    <img width="1440" alt="image" src="https://github.com/user-attachments/assets/c4d72b61-32d0-4e65-a26d-80fa0dd9ad9c" />

  - Lambda processes the input and triggers Amazon SES to send the message to the designated inbox.
 
    <img width="1440" alt="image" src="https://github.com/user-attachments/assets/f2ff2463-c594-4f1f-abec-8716205ab51f" />

  - Workflow: User Input -> API Gateway -> Lambda -> SES -> Email.
- **AI Chatbot**:
  - An Amazon Lex-powered chatbot was integrated for real-time user interaction.
  - Messages from the chatbot UI are sent via API Gateway to a Lambda function, which interacts with Amazon Lex.
  - Chat history and context are managed using DynamoDB to enhance conversational logic and user experience.
  - Architecture: Chatbot UI -> API Gateway -> Lambda -> Lex -> DynamoDB.

### 5. Automation with GitHub Actions
- A GitHub Actions pipeline was configured to automate deployments. Upon every push to the main branch, the pipeline:
  - Builds the React application.
  - Deploys the updated assets to the S3 bucket.
  - Invalidates CloudFront cache to reflect the latest changes immediately.
- This automation ensures efficient and error-free updates.

  <img width="1440" alt="image" src="https://github.com/user-attachments/assets/32d6f3d5-a87c-4d8d-bcca-e52bf0ac6d2d" />

  <img width="1112" alt="image" src="https://github.com/user-attachments/assets/db8a4520-e24a-4d47-a46b-8964fb0f6016" />

---

## Architectural Diagram
The following architecture was implemented for the portfolio website:
1. **Frontend**:
   - Developed in React (hosted on S3 with CloudFront as CDN).
2. **Backend**:
   - Serverless architecture utilizing Lambda for contact form handling and chatbot interaction.
   - API Gateway as the entry point for backend services.
3. **Database**:
   - DynamoDB for storing chatbot context and interaction history.
4. **Security**:
   - ACM for HTTPS.
   - IAM roles for secure resource access.
5. **Automation**:
   - CI/CD pipeline using GitHub Actions.

---

## Conclusion
This project demonstrates the integration of modern frontend development practices with robust cloud architecture. By leveraging React, AWS services, and serverless design, the portfolio website achieves high performance, security, and scalability. The documented process serves as a reference for developers exploring the intersection of web development and cloud engineering.

**Explore AWS and React to create your own scalable solutions!**

**Happy Building!**
