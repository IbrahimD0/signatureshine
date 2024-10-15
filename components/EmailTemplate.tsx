interface EmailTemplateProps {
  firstName: string;
  service: string;
  phone: string;
  addOns: string[];
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  service,
  phone,
  addOns,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thank you for booking with Signature Shine!</p>
    <h2>Booking Details:</h2>
    <ul>
      <li>
        <strong>Service:</strong> {service}
      </li>
      <li>
        <strong>Add-ons:</strong> {addOns.join(", ") || "None"}
      </li>
      
    </ul>
    <p>We will contact you through this phone number: {phone} shortly to confirm the details of your booking.</p>
  </div>
);
