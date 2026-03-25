export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12 flex justify-center">

      {/* Container */}
      <div className="max-w-3xl w-full space-y-8">

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-600">
            Last updated: March 2026
          </p>
        </div>

        {/* Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            1. Information We Collect
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            We collect basic information such as your name, email address,
            academic details, and usage data when you use our platform.
          </p>
        </section>

        {/* Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            2. How We Use Your Information
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            Your information is used to improve your experience, connect you
            with relevant users, provide academic insights, and deliver
            important updates via email.
          </p>
        </section>

        {/* Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            3. Data Sharing
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            We do not sell your personal data. Information may be shared only
            when necessary to provide core features of the platform or comply
            with legal obligations.
          </p>
        </section>

        {/* Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            4. Data Security
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            We implement appropriate security measures to protect your data.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        {/* Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            5. Your Rights
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            You have the right to access, update, or delete your personal data.
            You may contact us to exercise these rights.
          </p>
        </section>

        {/* Section */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            6. Contact Us
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            If you have any questions regarding this privacy policy, please
            contact us at nextsem@gmail.com.
          </p>
        </section>

      </div>
    </div>
  )
}