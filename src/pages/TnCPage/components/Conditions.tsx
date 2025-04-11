const conditions = [
  "1. Please read these Terms and Conditions carefully before using www.LetsLanceHK.com site which is in software outsourcing business.",
  "2. The user must agree and accept all the Terms and Conditions before using our web sites.",
  "3. LetsLanceHK - A software outsourcing company, reserves the right to modify Terms and Conditions at any time without informing the user.",
  "4.This web site is owned and operated by LetsLanceHK only. All content present on this site is the property of LetsLanceHk including all the graphics, images, logos, software, trademarks, video, text, audio and animation used on this Site.",
  "5. LetsLanceHK name and logo is the trademark of LetsLanceHK only. These trademarks & logo may not be used in any manner. You may not copy, reproduce, republished, use, adapt, modify and alter these contents of this website without the permission of LetsLanceHK. You must not use any contact information and e-mail addresses which may be found on this web site to send any unsolicited commercial information.",
  "6. The link of the third party web site address may found on this web sites, so we are not responsible for the contents of such sites or whole web site (third party) at all. The Third party web site is not under control of LetsLanceHK at all. You at your own risk may access to such other sites via the links contained on this web site.",
  "7. LetsLanceHK shall have no responsibility for any damage to your computer system or loss of data that results from the download of any information from this Site.",
];

export default function Conditions() {
  return (
    <div className="p-page flex flex-col gap-y-4 rounded-t-[3rem] bg-background py-12 text-primary mobile:py-24">
      {conditions.map((condition, i) => (
        <div
          className="border-b border-primary pb-4 text-xl font-bold mobile:font-light"
          key={i}
        >
          {condition}
        </div>
      ))}
    </div>
  );
}
