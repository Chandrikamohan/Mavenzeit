const TermsOfService = () => {
    return (
        <section id="TermsOfService" className="py-24 px-6 bg-white">
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
                <div className="space-y-10">
                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Use of Service</h2>
                        <p className="text-gray-600 leading-relaxed">
                            You agree to use the Service only for lawful purposes and in accordance with these Terms.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-medium">You must not:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Misuse our services or attempt unauthorized access</li>
                                <li>Interfere with the proper functioning of the Service</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2"> Services Overview</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Mavenzeit, we provide e-commerce consulting and performance marketing services designed to help businesses scale effectively.
                        </p>
                        <div className="space-y-3">
                            <p className="text-gray-800 font-medium">Our services include:</p>
                            <ul className="space-y-4 text-gray-600">
                                <li>
                                    <strong className="text-gray-900">E-Commerce Consulting</strong> – Growth strategies across multiple marketplaces and global platforms
                                </li>
                                <li>
                                    <strong className="text-gray-900">Performance Marketing</strong> – Data-driven campaigns across platforms such as Google, Meta, Amazon, and others
                                </li>
                                <li>
                                    <strong className="text-gray-900">Quick Commerce Solutions</strong> – Campaign execution for rapid delivery platforms like Blinkit, Swiggy Instamart, Zepto, and more
                                </li>
                            </ul>
                        </div>
                        <p className="text-gray-600 italic bg-gray-50 p-4 rounded-lg border-l-4 border-gray-200">
                            We aim to deliver data-driven, measurable results, but specific outcomes may vary based on multiple external factors beyond our control.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Intellectual Property</h2>
                        <p className="text-gray-600 leading-relaxed">
                            All content on the Website, including text, branding, design, graphics, and materials, is the property of Mavenzeit unless otherwise stated.
                        </p>
                        <p className="text-gray-600">
                            You may not copy, reproduce, distribute, or exploit any content without prior written permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2"> Disclaimer</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The Service is provided <span className="font-mono text-xs bg-gray-100 px-1 rounded">"AS IS"</span> and <span className="font-mono text-xs bg-gray-100 px-1 rounded">"AS AVAILABLE"</span> without warranties of any kind.
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-medium">We do not guarantee:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                <li>Specific business or financial outcomes</li>
                                <li>Uninterrupted or error-free operation of the Service</li>
                                <li>Accuracy or completeness of all information</li>
                            </ul>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            All strategies and recommendations are based on data, experience, and industry best practices, but execution and results depend on multiple external variables.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2"> Governing Law</h2>
                        <p className="text-gray-600">
                            These Terms are governed by the laws of <strong className="text-gray-900">Karnataka, India</strong>.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Dispute Resolution</h2>
                        <p className="text-gray-600">
                            If you have any concerns or disputes, you agree to first contact us to attempt informal resolution.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-2">Changes to Terms</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may update these Terms at any time. Continued use of the Service after updates means you accept the revised Terms.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default TermsOfService;
