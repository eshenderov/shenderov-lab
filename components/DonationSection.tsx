import React from 'react';

const DonationInfo: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      color: 'white', // Set all text color to white
      fontSize: '30px' // Set global font size larger
    }}>
      <h2 className="bg-gradient-to-r from-dragonfruit to-peach bg-clip-text pb-12 text-center font-sans text-5xl font-black text-transparent sm:text-6xl lg:pb-24">
        Donation
      </h2>

      <h2 style={{ fontSize: '22px' }}>It takes a team, including you, to advance cancer research!</h2>
      <p style={{ fontSize: '22px' }}>
        All philanthropy supporting the Shenderov Lab is tax-deductible.
      </p>

      <br/>
      <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>Online Donations:</h3>
      <p style={{ fontSize: '22px' }}>
        Please visit our <a href="https://secure.jhu.edu/form/Kimmel" style={{ textDecoration: 'underline', color: '#9cd47a' }}>secure online giving page</a> and indicate that
      </p>
      <p style={{ fontSize: '22px' }}>
      your gift is to support the Eugene Shenderov Lab.
      </p>

      <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>Mail Donations:</h3>
      <p style={{ fontSize: '22px' }}>
        Please make your check out to ‘Johns Hopkins University’ and mail to:
      </p>
      <address style={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'inherit', fontSize: '22px' }}>
        Johns Hopkins Kimmel Cancer Center <br />
        Development Office <br />
        750 East Pratt Street, 17th Floor <br />
        Baltimore, MD 21202
      </address>
      
      <br />
      <p style={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'inherit', fontSize: '22px' }}>
        If you would like more information about philanthropic giving,
      </p>
      <p style={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'inherit', fontSize: '22px' }}>
        please call the Development Office at
        <a href="tel:+14103616391" style={{ marginLeft: '5px', color: 'white' }}>410-361-6391</a>.
      </p>
    </div>
  );
};

export default DonationInfo;
