export default function Contact() {
  return (
    <section className="container py-14">
      <h1 className="text-3xl font-bold mb-6">Contact & Start Order</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="card p-6 space-y-4" method="POST" action="https://formsubmit.co/zain.ali.shah22222@gmail.com">
          <div>
            <label className="text-sm">Name</label>
            <input name="name" required className="input mt-1" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input name="email" type="email" required className="input mt-1" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm">Service</label>
            <select name="service" className="input mt-1">
              <option>Divisions</option>
              <option>Weekend League</option>
              <option>Playoffs</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Notes</label>
            <textarea name="message" className="textarea mt-1" placeholder="Any specific requests (playstyle, formation, time windows)…" />
          </div>

          {/* FormSubmit settings */}
          <input type="hidden" name="_subject" value="New Boosting Haven inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_autoresponse" value="Thanks for contacting Boosting Haven. We’ll reply shortly on email/WhatsApp." />

          <button className="btn btn-primary rounded-2xl w-full">Send</button>
          <p className="text-xs opacity-70">You can also message us directly on WhatsApp using the green button.</p>
        </form>

        <div className="card p-6 space-y-4">
          <div className="text-lg font-semibold">Fastest way: WhatsApp</div>
          <a
            target="_blank"
            className="btn btn-outline rounded-2xl"
            href={"https://wa.me/923325195882?text=" + encodeURIComponent("Hi! I want to place a boosting order.")}
          >
            Chat on WhatsApp
          </a>
          <div className="text-sm opacity-90">
            Business hours: 24/7 queue, live chat during peak hours. Region: Worldwide.
          </div>
          <div className="text-sm opacity-80">
            Payments placeholder available (Stripe/PayPal). Ask to enable when you’re ready.
          </div>
        </div>
      </div>
    </section>
  );
}
