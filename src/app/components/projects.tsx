import Image from "next/image";
import signerAppPic from "../../../public/dHealthSigner.jpg";
import assemblyConnectPic from "../../../public/assembly connect.png";
import fusionPic from "../../../public/fusion.png";
const Projects = () => {
  return (
    <div className="bg-dkblue">
      <section id="projects" className="py-16 px-4 max-w-[1200px] mx-auto">
        <h2 className="leading-normal text-4xl mb-14">
          Projects I&apos;m proud of
        </h2>
        <article className="sm:grid sm:grid-cols-10 gap-4">
          <div className="order-2 text-right sm:col-start-5 sm:col-end-11 sm:row-start-1 sm:row-end-2">
            <h4>Latest Project</h4>
            <h3 className="text-aqua text-2xl font-bold">dHealth Signer app</h3>
            <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
              The dHealth signer app is a non custodial client (wallet) that
              allows users to interact with dApps in the dHealth Ecosystem and
              view and maintain your DHP balance. The{" "}
              <a href="https://www.dhealth.com/" target="_blank">
                dHealth signer app
              </a>{" "}
              additionally supports signing of all dHealth transactions.
            </p>
            <h4 className="font-mono text-base m-0">
              Technologies used include:
            </h4>
            <ul className="list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base sm:justify-end">
              <li>React Native</li>
              <li>Typescript</li>
              <li>Blockchain</li>
              <li>Css</li>
            </ul>
          </div>

          <Image
            className="mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-2"
            width={584}
            height={358}
            src={signerAppPic}
            alt="Screenshot of the dHealth signer app."
          />
        </article>
        <article className="sm:grid sm:grid-cols-10 gap-4">
          <div className="order-2 text-left sm:col-start-1 sm:col-end-7 sm:row-start-1 sm:row-end-2">
            <h4>WAVEOC Project</h4>
            <h3 className="text-aqua text-2xl font-bold">
              Assemble Connect Tenant Portal
            </h3>
            <p className="bg-black p-4 rounded-lg text-base text-white leading-6">
              <a
                href="https://myaccount.assembleconnect.com.au/login"
                target="_blank"
              >
                Assemble connect
              </a>{" "}
              provides utility services (hot water, electricity, and internet)
              to apartment tenants. Tenants can use the tenant portal to
              register, select a tariff plan, set up a payment method (bank
              account, card, or direct debit), generate monthly and weekly
              invoices, and disconnect the service.
            </p>
            <h4 className="font-mono text-base m-0">
              Technologies used include:
            </h4>
            <ul className="list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base sm:justify-start">
              <li>React</li>
              <li>Typescript</li>
              <li>Nest.js</li>
              <li>Styled Components</li>
              <li>AWS</li>
              <li>Redux</li>
            </ul>
          </div>

          <Image
            className="mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:col-start-6 sm:col-end-11 sm:row-start-1 sm:row-end-2 max-h-[358px]"
            width={584}
            height={358}
            src={assemblyConnectPic}
            alt="Screenshot of the dHealth signer app."
          />
        </article>
        <article className="sm:grid sm:grid-cols-10 gap-4">
          <div className="order-2 text-right sm:col-start-5 sm:col-end-11 sm:row-start-1 sm:row-end-2">
            <h4>Excellerent Project</h4>
            <h3 className="text-aqua text-2xl font-bold">
              Fusion web application
            </h3>
            <p className="bg-black p-4 rounded-lg text-base text-white leading-6 text-left">
              The{" "}
              <a
                href="https://blackbox.blackboxintelligence.com/"
                target="_blank"
              >
                Fusion
              </a>{" "}
              project bring together all of BBI core products
              (Workforce,Financial, Guest) into one product offering so users
              are capable of accessing all of BBI without having to log into
              multiple applications. The efforts done throughout this project
              will see an improved and modernized UI as well as an opportunity
              for current BBI users to utilize a SSO service to access their
              products.
            </p>
            <h4 className="font-mono text-base m-0">
              Technologies used include:
            </h4>
            <ul className="list-none p-0 m-0 flex flex-row flex-wrap justify-start gap-4 text-base sm:justify-end">
              <li>React</li>
              <li>Typescript</li>
              <li>Redux</li>
              <li>.Net</li>
              <li>Css</li>
              <li>Azure</li>
            </ul>
          </div>

          <Image
            className="mt-8 mx-0 mb-16 border-l border-aqua border-solid border-t rounded-3xl p-4 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-2"
            width={584}
            height={358}
            src={fusionPic}
            alt="Screenshot of the dHealth signer app."
          />
        </article>
      </section>
    </div>
  );
};
export default Projects;
