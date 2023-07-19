import React, { useEffect, useState } from 'react';

const Paypal = ({ total }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const paypalScriptURL =
      'https://www.paypal.com/sdk/js?client-id=ATRuWv5M6Qr150SKANCfDlcqAeneMxZCcc21oAwZIq-gANX_AbtPsds6JaklpHxtlLE9cFIt1GF5gwgY';

    const loadScript = (url, callback) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      script.onload = callback;
      document.body.appendChild(script);
    };

    loadScript(paypalScriptURL, () => {
      setScriptLoaded(true);
    });

    return () => {
      const paypalScript = document.querySelector(`[src="${paypalScriptURL}"]`);
      if (paypalScript) {
        paypalScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [{ amount: { value: total } }],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
          },
        })
        .render('.paypal-button');
    }
  }, [scriptLoaded, total]);

  return <div className="paypal-button" />;
};

export default Paypal;
