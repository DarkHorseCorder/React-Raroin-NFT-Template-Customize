import React from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroPrivacy from '../../../components/hero/HeroPrivacy';
import useDocumentTitle from '../../../components/useDocumentTitle';

const PrivacyPolicy = () => {
  useDocumentTitle(' Privacy Policy');
  return (
    <div>
      <Header />
      <HeroPrivacy />
      <div className="privacy__page">
        <div className="container">
          <div className="box space-y-30" style={{padding: '60px 30px'}}>
            <div className="space-y-20">
              <h3>What information do we collect?</h3>
              <p>
                We collect information from you when you register on our site
                and gather data when you participate in the forum by reading,
                writing, and evaluating the content shared here.
                <br />
                When registering on our site, you may be asked to enter your
                name and e-mail address. You may, however, visit our site
                without registering. Your e-mail address will be verified by an
                email containing a unique link. If that link is visited, we know
                that you control the e-mail address.
                <br />
                When registered and posting, we record the IP address that the
                post originated from. We also may retain server logs which
                include the IP address of every request to our server.
              </p>
            </div>
            <div className="space-y-20">
              <h3>What do we use your information for?</h3>
              <p>
                Any of the information we collect from you may be used in one of
                the following ways: To personalize your experience — your
                information helps us to better respond to your individual needs.
                <br />
                To improve our site — we continually strive to improve our site
                offerings based on the information and feedback we receive from
                you. To improve customer service — your information helps us to
                more effectively respond to your customer service requests and
                support needs. To send periodic emails — The email address you
                provide may be used to send you information, notifications that
                you request about changes to topics or in response to your user
                name, respond to inquiries, and/or other requests or questions.
              </p>
            </div>
            <div className="space-y-20">
              <h3>How do we protect your information?</h3>
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information when you enter, submit, or
                access your personal information.
              </p>
            </div>
            <div className="space-y-20">
              <h3>Do we use cookies?</h3>
              <p>
                Yes. Cookies are small files that a site or its service provider
                transfers to your computer’s hard drive through your Web browser
                (if you allow). These cookies enable the site to recognize your
                browser and, if you have a registered account, associate it with
                your registered account.
                <br />
                We use cookies to understand and save your preferences for
                future visits and compile aggregate data about site traffic and
                site interaction so that we can offer better site experiences
                and tools in the future. We may contract with third-party
                service providers to assist us in better understanding our site
                visitors. These service providers are not permitted to use the
                information collected on our behalf except to help us conduct
                and improve our business.
              </p>
            </div>
            <div className="space-y-20">
              <h3>Do we disclose any information to outside parties?</h3>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our site,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided
                to other parties for marketing, advertising, or other uses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
