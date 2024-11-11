interface EmailRequest {
    toMail: string;
    content: string;
  }
  
  export const sendEmail = async (data: EmailRequest) => {
    try {
      const response = await fetch('/api/function-1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MTg5NDM0OTA0NTcxODI1Nzg4IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJwYXNsYXp6YXJpbkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI4ZGxKMnFVYXN1OXdyalc0R0lQLWp3IiwiaWF0IjoxNzMxMzY3NjIyLCJleHAiOjE3MzEzNzEyMjJ9.PlTWyRHwt8u93d6JbkOWKocgH1VsRErvhwRglTsnKtlDWlX-3tFr_UFvTsF_sUhoWh5EcYAxrIQwqKFQ2vnSDYeyrQymNj1_eudPXMKLd4fgOnIlRtSxG7iUW5F-83_KHV0wnbXSZLrrBRdiKJen45Pbz7jOYriKUqVjteG8F6OFSEdbWyS3_CmrA5V1uJ_j5--IgwjtEIKabj3odLaystMySCC4ylvLwDxjuqRt39DPcZ-M9UekNtYvDFXPIzyKTrBcVmKQKqWiTMNZm-G3onDbSsteiJJuckPlwlqzPKQVOjTLUhslxsoiIZjyIl-LwBGmtx8HPZHgxYMjh4qP8w'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.text();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
  
  