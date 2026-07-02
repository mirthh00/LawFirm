import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Understanding Your Rights During Divorce Proceedings | Makwarela A.S Attorneys",
  description:
    "Learn about your rights during divorce proceedings in South Africa, the legal process involved, and how experienced legal representation can help protect your interests.",
};

export default function DivorceRightsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[450px]">
        <Image
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80"
          alt="Divorce consultation"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-white">
          <p className="uppercase tracking-[0.3em] text-amber-400 text-sm">
            Family Law
          </p>

          <h1 className="text-5xl font-bold mt-4 max-w-4xl leading-tight">
            Understanding Your Rights During Divorce Proceedings
          </h1>

          <div className="flex gap-8 mt-8 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Legal Insights
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} />
              8 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-20 prose prose-lg max-w-none">

        <p>
          Divorce is one of life's most emotionally challenging experiences.
          Beyond the emotional impact, it often involves important legal and
          financial decisions that may affect your family, your children, your
          property, and your future. Understanding your rights before making
          important decisions can help you approach the process with greater
          confidence and avoid costly mistakes.
        </p>

        <p>
          South African law provides legal mechanisms to ensure that divorce is
          handled fairly. Every matter is unique, and the outcome depends on
          factors such as the marriage regime, the presence of children, the
          assets involved, and whether both spouses agree on the terms of the
          divorce.
        </p>

        <h2>Understanding the Divorce Process</h2>

        <p>
          Divorce begins when one spouse institutes legal proceedings in court.
          While many people assume divorce is always a lengthy courtroom battle,
          this is not always the case. Where spouses can agree on important
          issues such as property division, maintenance and parental
          responsibilities, the process is often considerably faster and less
          stressful.
        </p>

        <p>
          However, where disagreements exist, legal representation becomes
          especially important to ensure your interests are properly protected.
        </p>

        <h2>Children Always Come First</h2>

        <p>
          When children are involved, South African courts place their best
          interests above everything else. Decisions regarding residence,
          parental responsibilities, contact arrangements and maintenance are
          considered carefully to ensure children continue to receive stability
          and appropriate care after the divorce.
        </p>

        <p>
          Parents are encouraged to cooperate wherever possible, but where
          disputes arise, legal guidance can help achieve arrangements that are
          fair while protecting the wellbeing of the children.
        </p>

        <h2>Division of Assets</h2>

        <p>
          One of the most common concerns during divorce relates to property and
          finances. The manner in which assets are divided depends largely on
          the matrimonial property system governing the marriage.
        </p>

        <p>
          Factors such as jointly owned property, businesses, retirement funds,
          investments and outstanding debts may all require careful legal
          consideration. Attempting to resolve these issues without proper legal
          advice may lead to unintended financial consequences.
        </p>

        <h2>Maintenance</h2>

        <p>
          Maintenance may become relevant for both children and, in some
          circumstances, a spouse. The court considers several factors when
          determining whether maintenance is appropriate, including financial
          circumstances, earning capacity and reasonable living expenses.
        </p>

        <p>
          Every maintenance matter is assessed individually based on the
          available evidence and applicable law.
        </p>

        <h2>Why Early Legal Advice Matters</h2>

        <p>
          Many people only seek legal assistance after agreements have already
          been signed or disputes have escalated. Unfortunately, correcting
          mistakes later is often more difficult and more expensive than
          obtaining legal advice from the beginning.
        </p>

        <p>
          Consulting an experienced attorney early can help you understand your
          rights, evaluate possible outcomes, negotiate effectively and protect
          your long-term interests.
        </p>

        <h2>Choosing the Right Legal Representation</h2>

        <p>
          Divorce is not simply about ending a marriage—it is about protecting
          your future. Experienced legal representation ensures that your matter
          is approached with professionalism, discretion and careful attention
          to detail.
        </p>

        <p>
          Every family situation is different. An attorney who understands both
          the legal and personal aspects of divorce can provide guidance
          throughout the process while helping you make informed decisions.
        </p>

        <div className="bg-stone-900 text-white rounded-xl p-10 my-16">

          <h3 className="text-3xl font-bold mb-4">
            Need Legal Assistance?
          </h3>

          <p className="text-white/80 leading-8">
            If you are considering divorce or have already begun divorce
            proceedings, obtaining professional legal advice as early as
            possible can make a significant difference. The legal team at
            <strong> Makwarela A.S Attorneys </strong>
            is committed to providing practical guidance, protecting your
            interests and helping you navigate every stage of the process with
            confidence and professionalism.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 mt-8 bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-md font-semibold transition"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>

        <h2>Final Thoughts</h2>

        <p>
          Divorce represents a significant life transition, but understanding
          your legal rights can help reduce uncertainty and enable you to make
          informed decisions. Every case presents different legal and personal
          considerations, making professional legal advice invaluable.
        </p>

        <p>
          Whether your matter involves children, property, maintenance or
          complex financial issues, obtaining experienced legal guidance ensures
          your interests remain protected throughout the process.
        </p>

        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 mt-10 text-amber-600 font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Articles
        </Link>

      </article>
    </main>
  );
}