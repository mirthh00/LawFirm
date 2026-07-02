import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title:
    "What to Do If You Face Unfair Dismissal | Makwarela A.S Attorneys",
  description:
    "Learn what unfair dismissal means in South Africa, what your rights are as an employee, and the practical steps to take if you believe you have been dismissed unfairly.",
};

export default function UnfairDismissalPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative h-[450px]">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
          alt="Labour law consultation"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-white">

          <p className="uppercase tracking-[0.3em] text-amber-400 text-sm">
            Labour Law
          </p>

          <h1 className="text-5xl font-bold mt-4 max-w-4xl leading-tight">
            What to Do If You Face Unfair Dismissal
          </h1>

          <div className="flex gap-8 mt-8 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Legal Insights
            </span>

            <span className="flex items-center gap-2">
              <Clock size={16} />
              9 min read
            </span>
          </div>

        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-20 prose prose-lg max-w-none">

        <p>
          Losing your job can be one of the most stressful experiences anyone
          faces. Besides the emotional impact, dismissal often creates immediate
          financial pressure and uncertainty about the future. Fortunately,
          South African labour law provides important protections for employees,
          ensuring that employers follow fair procedures and have valid reasons
          before terminating employment.
        </p>

        <p>
          If you believe you have been dismissed unfairly, understanding your
          rights and acting promptly can make a significant difference to your
          case.
        </p>

        <h2>What Is Unfair Dismissal?</h2>

        <p>
          Not every dismissal is unlawful. Employers are entitled to terminate
          employment in certain circumstances, provided they follow the law and
          act fairly.
        </p>

        <p>
          A dismissal may be considered unfair if there was no valid reason,
          proper procedures were not followed, or the employee was treated
          inconsistently or discriminatorily. Each matter depends on its own
          facts, making legal advice particularly valuable.
        </p>

        <h2>Common Reasons for Workplace Disputes</h2>

        <p>
          Labour disputes arise in many different situations. Employees often
          seek legal assistance after being dismissed for alleged misconduct,
          poor performance, operational requirements or other reasons they
          believe were handled unfairly.
        </p>

        <p>
          In many cases, employees are also concerned about disciplinary
          hearings, workplace discrimination, unpaid salaries, harassment,
          contract disputes or unfair labour practices occurring before their
          dismissal.
        </p>

        <h2>Don't Ignore Important Documents</h2>

        <p>
          If your employer provides letters, disciplinary notices, termination
          documents or settlement agreements, keep copies of everything.
          Documentation often becomes crucial when determining exactly what
          happened and whether correct procedures were followed.
        </p>

        <p>
          Avoid signing agreements that you do not fully understand. If you are
          uncertain about the legal consequences of a document, obtain legal
          advice before signing wherever possible.
        </p>

        <h2>Act Without Delay</h2>

        <p>
          Employment disputes are often subject to strict legal time limits.
          Waiting too long before seeking assistance may affect the options
          available to you. Even if you are unsure whether your dismissal was
          unfair, obtaining legal advice early allows your situation to be
          assessed while evidence and documentation remain readily available.
        </p>

        <h2>Gather Relevant Information</h2>

        <p>
          Before meeting with an attorney, collect any documents that may help
          explain your situation. These may include your employment contract,
          disciplinary notices, payslips, written warnings, emails,
          correspondence with management and any records relating to your
          dismissal.
        </p>

        <p>
          The more information available, the easier it becomes to assess your
          legal position and identify possible next steps.
        </p>

        <h2>Can Every Dismissal Be Challenged?</h2>

        <p>
          Every case is different. Some dismissals are legally justified,
          whereas others may involve procedural irregularities or substantive
          unfairness. An experienced labour law attorney can evaluate the facts,
          explain your rights and advise whether further legal action may be
          appropriate.
        </p>

        <h2>Why Professional Legal Advice Matters</h2>

        <p>
          Labour disputes often involve complex legislation and procedural
          requirements. Attempting to resolve a dispute without understanding
          the applicable legal framework can place you at a disadvantage.
        </p>

        <p>
          Experienced legal representation helps ensure your rights are
          protected while providing practical guidance throughout the process,
          whether through negotiation, dispute resolution or litigation where
          appropriate.
        </p>

        <div className="bg-stone-900 rounded-xl text-white p-10 my-16">

          <h3 className="text-3xl font-bold mb-4">
            Need Assistance With a Labour Matter?
          </h3>

          <p className="text-white/80 leading-8">
            Employment disputes often require prompt action and informed legal
            guidance. If you believe your dismissal was unfair or you are
            involved in any workplace dispute, the legal team at
            <strong> Makwarela A.S Attorneys </strong>
            can assess your circumstances, explain your legal options and help
            you pursue an appropriate course of action with professionalism and
            confidence.
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
          Facing dismissal can feel overwhelming, but understanding your rights
          is the first step towards making informed decisions. Every employment
          dispute is unique, and obtaining professional legal advice early can
          help you understand your options and avoid unnecessary complications.
        </p>

        <p>
          If you are uncertain about your legal position, consulting an
          experienced labour law attorney can provide clarity, protect your
          interests and help you move forward with confidence.
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