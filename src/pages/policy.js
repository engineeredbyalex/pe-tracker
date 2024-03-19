import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import { useState } from "react";

export default function PolicyPage() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <div className="bg-bgGray min-h-screen">
                <div className="md:hidden flex items-center justify-start p-4">
                    <button className="z-[5]" onClick={() => setShowNav(!showNav)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(126 34 206)" className="w-10 h-10">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="flex">
                    <Navigation show={showNav} />
                    <div className="flex p-4 items-center justify-center w-full">
                        <div className="container mx-auto px-4 py-8 text-purple-500">
                            <h1 className="text-3xl font-bold mb-4 text-purple-700">Privacy Policy</h1>
                            <p className="mb-4">
                                Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
                            </p>
                            <h2 className="text-xl font-bold mb-2 text-purple-700">Information We Collect</h2>
                            <p className="mb-4">
                                We only collect information about you if we have a reason to do so — for example, to provide our services, to communicate with you, or to make our services better.
                            </p>
                            <h2 className="text-xl font-bold mb-2 text-purple-700">How We Use Information</h2>
                            <p className="mb-4">
                                We use the information we collect in various ways, including to:
                            </p>
                            <ul className="list-disc ml-8 mb-4">
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                            </ul>
                            <h2 className="text-xl font-bold mb-2 text-purple-700">Disclosure of Information</h2>
                            <p className="mb-4">
                                We may disclose your personal information to comply with legal obligations, protect and defend our rights and property, prevent fraud, and enforce our policies.
                            </p>
                            <h2 className="text-xl font-bold mb-2 text-purple-700">Security</h2>
                            <p className="mb-4">
                                We take reasonable precautions to protect your information. When you submit sensitive information via the website, it is protected both online and offline.
                            </p>
                            <h2 className="text-xl font-bold mb-2 text-purple-700">Changes to This Policy</h2>
                            <p className="mb-4">
                                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                            </p>
                            <h2 className="text-xl font-bold mb-2 text-purple-700">Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions or suggestions about our privacy policy, do not hesitate to contact us at xzsplit69@gmail.com or
                                <br /> on Reddit at Few-Valuable-6094.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
