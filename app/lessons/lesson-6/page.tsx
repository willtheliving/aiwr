export default function Lesson6Page() {
  return (
    <main className="bg-gray-100 text-gray-800 leading-relaxed">
      <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white shadow-lg my-10 rounded-lg">
        <header className="border-b-2 border-gray-200 pb-6 mb-8">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            DIY MFA IN WRITING
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Lesson Six: The Soul of the Story: Crafting Purposeful Dialogue and Subtext
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-6 text-sm text-gray-600">
            <div>
              <strong>Program:</strong> The Writer&apos;s Apprenticeship: A Two-Year, Self-Paced MFA
            </div>
            <div>
              <strong>Position:</strong> Year 1, Semester 1, Week 6
            </div>
            <div>
              <strong>Estimated Time:</strong> 3-4 hours
            </div>
            <div>
              <strong>Prerequisites:</strong> Lessons 1 through 5
            </div>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            1. Learning Objectives
          </h2>
          <p className="mb-4">By the end of this lesson, you will be able to:</p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              Analyze dialogue to determine its three primary functions: revealing character,
              advancing plot, and creating tension.
            </li>
            <li>
              Differentiate between realistic speech and purposeful, naturalistic dialogue.
            </li>
            <li>
              Define subtext and identify how it&apos;s created when a character&apos;s spoken words conflict
              with their inner desires or the scene&apos;s context.
            </li>
            <li>
              Write a 1,000-word dialogue-driven scene where the central conflict is conveyed primarily
              through subtext.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            2. Lecture
          </h2>

          <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Dialogue is Action</h3>
          <div className="space-y-5 text-gray-700">
            <p>
              Novice writers often make a critical mistake: they believe dialogue is for conveying
              information. They write scenes where characters tell each other things they already know,
              all for the benefit of the reader. This is called exposition, and it is the fastest way to
              write dialogue that is flat, boring, and dead on the page.
            </p>
            <p>
              Here is the single most important rule you will learn about this topic:{' '}
              <strong>Dialogue is not conversation; dialogue is action.</strong> Every line spoken by a
              character must be a tactic they are employing to get something they want. They may want to
              dominate an opponent, seek reassurance, extract a secret, delay a confrontation, or charm a
              lover. Their words are the weapons, tools, and shields they use in the pursuit of their goal.
              When you view dialogue as a form of strategic action—a dance of competing desires—it
              inherently becomes more dramatic, revealing, and propulsive.
            </p>
          </div>

          <h4 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Part I: The Three Functions of Dialogue</h4>
          <div className="space-y-5 text-gray-700">
            <p>
              Every significant line of dialogue must serve at least one of three functions, and the best
              dialogue often serves all three at once.
            </p>
            <ul className="list-disc list-outside space-y-3 pl-6">
              <li>
                <strong>To Reveal Character:</strong> How a character speaks is a direct reflection of who
                they are. Their vocabulary (or lack thereof), their sentence structure, their rhythms of
                speech, and the tactics they employ all reveal their personality, education, and emotional
                state. A character who uses complex, academic language is different from one who speaks in
                short, blunt commands.
              </li>
              <li>
                <strong>To Advance the Plot:</strong> Dialogue must move the story forward. It can do this by
                revealing a crucial piece of information, forcing a character to make a decision, or
                escalating a conflict. A line of dialogue should change the dynamic of the scene. After it is
                spoken, the situation should be different than it was before.
              </li>
              <li>
                <strong>To Create Tension (Subtext):</strong> This is the most advanced function. The tension
                in a scene rarely comes from what is said, but from what is <em>not</em> being said. This gap
                between the surface conversation and the underlying truth is called subtext.
              </li>
            </ul>
          </div>

          <h4 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Part II: The Art of Implication - Subtext</h4>
          <div className="space-y-5 text-gray-700">
            <p>
              Characters, like real people, rarely say exactly what they mean, especially when they are under
              emotional pressure or pursuing a hidden agenda. The real story happens between the lines.
            </p>
            <p>Consider a simple line: &quot;It&apos;s getting late.&quot;</p>
            <ul className="list-disc list-outside space-y-3 pl-6">
              <li>
                <strong>Surface Meaning:</strong> A statement of fact about the time.
              </li>
              <li>
                <strong>Subtext (depending on context):</strong>
                <ul className="list-[circle] list-outside space-y-1 pl-8 mt-2">
                  <li>
                    Said by a nervous host to a guest who has overstayed their welcome: &quot;Please leave
                    now.&quot;
                  </li>
                  <li>
                    Said by one bank robber to another as the police sirens grow louder: &quot;We have to get
                    out of here, now.&quot;
                  </li>
                  <li>
                    Said by a lover to another after a perfect evening: &quot;I don&apos;t want this night to
                    end.&quot;
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              The subtext is the true meaning, the character&apos;s real action. Your job as a writer is to
              construct scenes where the surface dialogue becomes a vessel for this hidden, more powerful
              current of meaning. The classic example is Hemingway&apos;s &quot;Hills Like White Elephants,&quot; where a
              couple discusses the landscape, the weather, and their drinks, while the subtext of their
              conversation is a life-altering decision about an abortion.
            </p>
          </div>

          <h4 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Part III: Crafting Naturalistic Dialogue</h4>
          <div className="space-y-5 text-gray-700">
            <p>
              Your dialogue must sound believable, but it must not be a verbatim transcript of real speech.
              Real speech is messy; it is full of filler words (&quot;um,&quot; &quot;ah,&quot; &quot;like&quot;), repetitions, and
              mundane pleasantries that kill narrative momentum. Your goal is not realism, but{' '}
              <strong>naturalism</strong>. Naturalistic dialogue captures the flavor of real speech while
              strategically cutting the superfluous parts.
            </p>
            <ul className="list-disc list-outside space-y-3 pl-6">
              <li>
                <strong>Use Contractions:</strong> People say &quot;I&apos;m,&quot; &quot;don&apos;t,&quot; and &quot;it&apos;s.&quot; Using
                contractions is one of the fastest ways to make dialogue feel less stilted.
              </li>
              <li>
                <strong>Use Sentence Fragments:</strong> Not every line needs to be a grammatically perfect
                sentence. Sometimes, a single word is the most powerful response. &quot;Liar.&quot; &quot;Never.&quot;
              </li>
              <li>
                <strong>Attribute Sparingly:</strong> The reader needs to know who is speaking, but overusing
                dialogue tags can be clunky. The words &quot;said&quot; and &quot;asked&quot; are the industry standard because
                they are functionally invisible to the reader. Avoid ostentatious synonyms like &quot;he
                pontificated.&quot;
              </li>
              <li className="space-y-2">
                <strong>Show, Don&apos;t Tell (in Tags):</strong> Do not use adverbs in your dialogue tags to explain
                how a line was spoken (e.g., &quot;he said angrily&quot;). The anger should be evident in the words
                themselves or in a corresponding action.
                <blockquote className="ml-4 pl-4 border-l-4 border-gray-300 italic text-gray-600 mt-2">
                  <strong>Telling:</strong> &quot;Get out,&quot; he said angrily.
                </blockquote>
                <blockquote className="ml-4 pl-4 border-l-4 border-gray-300 italic text-gray-600">
                  <strong>Showing:</strong> &quot;Get out.&quot; He swept the papers from his desk with a crash.
                </blockquote>
              </li>
            </ul>
            <p>
              In masterful dialogue, the words are only one part of the communication. The pauses, gestures,
              and actions that surround the words often carry more weight than the words themselves.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            3. Reading Assignment
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>Primary Reading 1:</strong> Reread &quot;Hills Like White Elephants&quot; by Ernest Hemingway.
              (This story is in the public domain and widely available).
            </li>
            <li>
              <strong>Primary Reading 2:</strong> Find a script for a short scene from a play or movie you
              admire. Good examples known for subtext include scenes from <em>Mad Men</em>, <em>The Sopranos</em>,
              or plays by Harold Pinter. Read the dialogue aloud.
              <p className="mt-3 mb-1 font-semibold">Here are some sites to consider:</p>
              <div className="overflow-x-auto rounded-lg border border-gray-300">
                <table className="w-full min-w-[500px] border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border-b border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">
                        Screenplays
                      </th>
                      <th className="border-b border-gray-300 p-3 text-left text-sm font-semibold text-gray-700">
                        Plays
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border-b border-gray-300 p-3">
                        <a
                          href="https://www.simplyscripts.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          Simply Scripts
                        </a>
                      </td>
                      <td className="border-b border-gray-300 p-3">
                        <a
                          href="https://www.playscripts.com/free-reads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          PlayScripts (Free Reads)
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border-b border-gray-300 p-3">
                        <a
                          href="https://imsdb.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          Internet Movie Script Database (IMSDb)
                        </a>
                      </td>
                      <td className="border-b border-gray-300 p-3">
                        <a
                          href="https://www.dramatists.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          Dramatists Play Service (DPS)
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border-b border-gray-300 p-3">
                        <a
                          href="http://www.script-o-rama.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          Drew&apos;s Script-O-Rama
                        </a>
                      </td>
                      <td className="border-b border-gray-300 p-3">
                        <a
                          href="https://www.concordtheatricals.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          Concord Theatricals
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3">
                        <a
                          href="https://www.dailyscript.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          The Daily Script
                        </a>
                      </td>
                      <td className="p-3">
                        <a
                          href="https://www.dramaticpublishing.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 hover:underline"
                        >
                          Dramatic Publishing
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              <strong>Secondary Reading:</strong> Search for and read the article{' '}
              <a
                href="https://self-publishingschool.com/how-to-write-dialogue/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                <strong>&quot;How to Write Dialogue That Captivates Your Reader&quot;</strong>
              </a>{' '}
              from the Self-Publishing School website. It provides practical tips on formatting, flow, and
              function.
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Reading Questions:</h4>
          <ol className="list-decimal list-outside space-y-3 pl-6 text-gray-700">
            <li>
              In &quot;Hills Like White Elephants,&quot; find a line of dialogue where the surface meaning is
              completely at odds with the subtext. What is the character really saying?
            </li>
            <li>
              What &quot;action&quot; is the American man taking with his words? What &quot;action&quot; is the girl taking?
              What is the core conflict of their competing goals?
            </li>
            <li>
              In the script you chose, find a moment of silence or a pause. What is being communicated in
              that silence?
            </li>
            <li>
              According to the secondary reading, what is the purpose of a &quot;beat&quot; in dialogue? How can you
              use action beats (small physical gestures) to break up dialogue and reveal a character&apos;s true
              feelings?
            </li>
          </ol>

          <h4 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Reading Journal Prompt:</h4>
          <p className="text-gray-700">
            In 300 words, analyze the power dynamic in &quot;Hills Like White Elephants.&quot; Who has more power in
            the conversation, and how is this power demonstrated through their dialogue tactics?
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            4. Writing Assignment
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>Warm-up Exercise (10 minutes):</strong> Write a short exchange between two people stuck in
              an elevator. The only words they are allowed to say are &quot;hello,&quot; &quot;okay,&quot; &quot;nice,&quot; and
              &quot;well.&quot; Convey a full story of rising panic and eventual relief using only those four words,
              pauses, and action beats.
            </li>
            <li>
              <strong>Primary Exercise (1,000 words):</strong> Write a single scene between two characters.
              <ul className="list-[circle] list-outside space-y-2 pl-8 mt-3">
                <li>
                  <strong>Context:</strong> The characters have a deep, shared history and a powerful,
                  unresolved conflict between them (e.g., a past betrayal, an unrequited love, a family
                  secret).
                </li>
                <li>
                  <strong>Surface Conversation:</strong> The dialogue of the scene must be about something
                  completely mundane and trivial (e.g., assembling a piece of furniture, deciding what to
                  order for dinner, discussing the weather).
                </li>
                <li>
                  <strong>Constraint:</strong> The characters are forbidden from ever mentioning the real issue
                  between them. The entire conflict must be communicated through subtext—the double meanings in
                  their words, the loaded pauses, and the small actions they take while speaking. The reader
                  should feel the immense tension, even if the words themselves are calm.
                </li>
              </ul>
            </li>
            <li>
              <strong>Revision Task:</strong> Read your dialogue aloud. Does it sound like something a real
              person would say? Cut any lines that feel like pure exposition. Find three places to replace a
              dialogue tag (&quot;he said&quot;) with a revealing action beat.
            </li>
            <li>
              <strong>Reflection Component (200 words):</strong> What is the central conflict simmering beneath
              your dialogue? Identify one specific line from your scene and explain its double meaning—what the
              character says versus what the character <em>means</em>.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            5. AI Integration Component
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>AI Brainstorming Prompt (Subtext Generator):</strong>
              <blockquote className="mt-2 p-4 bg-gray-50 border-l-4 border-indigo-500 rounded-r-lg text-gray-600 italic">
                &quot;I am writing a scene where a character wants to accuse another character of stealing from
                them, but is too afraid to do so directly. The surface conversation is about a missing coffee
                mug. Generate 5 lines of dialogue for the accuser where they are ostensibly talking about the
                mug, but the subtext is clearly about the stolen money.&quot;
              </blockquote>
            </li>
            <li>
              <strong>AI Editing Exercise (Dialogue Polish):</strong>
              <blockquote className="mt-2 p-4 bg-gray-50 border-l-4 border-indigo-500 rounded-r-lg text-gray-600 italic">
                &quot;Please analyze the following dialogue. Identify any lines that sound unnatural, stilted, or
                overly formal. Suggest more naturalistic alternatives using contractions and simpler phrasing.
                Also, identify any dialogue tags that could be replaced by a stronger action beat.&quot;
              </blockquote>
            </li>
            <li>
              <strong>AI Critique &amp; Ethical Considerations:</strong> An AI can be very effective at making
              dialogue sound more &quot;natural&quot; by applying rules about contractions and syntax. However, it is a
              poor judge of subtext. The emotional and strategic layers of a conversation are uniquely human.
              Use the AI to polish the <em>surface</em> of your dialogue, but the hidden meaning must come from
              your own understanding of the characters&apos; goals and fears.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            6. Community Component
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>Peer Exchange:</strong> Share your 1,000-word scene with your accountability partner. Ask
              them to read it and then answer two questions: 1) &quot;What is this scene <em>really</em> about?&quot; and 2)
              &quot;What is the core conflict between these two characters?&quot; If they can accurately identify the
              subtext, your scene is a success.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            7. Self-Assessment Tools
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>Progress Checklist:</strong>
              <ul className="list-none space-y-2 pl-2 mt-3">
                <li className="flex items-center">
                  <input type="checkbox" id="check1" className="mr-3 w-4 h-4 accent-indigo-600" disabled />
                  <label htmlFor="check1">I have completed the assigned readings.</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="check2" className="mr-3 w-4 h-4 accent-indigo-600" disabled />
                  <label htmlFor="check2">I have completed the reading journal prompt.</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="check3" className="mr-3 w-4 h-4 accent-indigo-600" disabled />
                  <label htmlFor="check3">I have written a first draft of the 1,000-word subtext scene.</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="check4" className="mr-3 w-4 h-4 accent-indigo-600" disabled />
                  <label htmlFor="check4">I have revised the scene, focusing on naturalistic dialogue and action beats.</label>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" id="check5" className="mr-3 w-4 h-4 accent-indigo-600" disabled />
                  <label htmlFor="check5">I have saved this scene in my Semester 1 Portfolio.</label>
                </li>
              </ul>
            </li>
            <li>
              <strong>Skills Rubric:</strong>
              <ul className="list-none space-y-2 pl-2 mt-3">
                <li>
                  <strong>Dialogue as Action:</strong> (Developing / Proficient / Advanced) - Does every line of
                  my dialogue serve a clear purpose for the character speaking it?
                </li>
                <li>
                  <strong>Subtext Mastery:</strong> (Developing / Proficient / Advanced) - How effectively did I
                  convey the scene&apos;s true conflict without ever stating it directly?
                </li>
              </ul>
            </li>
            <li>
              <strong>Portfolio Guidelines:</strong> Save this scene in your Semester 1 Portfolio. It is a key
              demonstration of your ability to handle nuance and tension.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            8. Extension Activities (Optional)
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>For Advanced Students:</strong> Take the scene you just wrote and rewrite it from the
              other character&apos;s point of view. How do their interpretations of the subtext differ? What new
              layers of meaning are revealed?
            </li>
            <li>
              <strong>For Struggling Students:</strong> Transcribe one page of dialogue from a favorite TV show
              or movie. Then, next to each line, write down what the character <em>really</em> means or what they
              are trying to <em>do</em> with that line. This exercise helps train you to see the action beneath the
              words.
            </li>
            <li>
              <strong>Cross-Genre Exploration:</strong> How does dialogue function differently in a stage play
              versus a novel? How does the lack of descriptive tags in a script force the dialogue itself to
              carry more weight?
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-5">
            9. Key Takeaways &amp; Next Steps
          </h2>
          <ul className="list-disc list-outside space-y-4 pl-6 text-gray-700">
            <li>
              <strong>Essential Concepts:</strong>
              <ul className="list-[circle] list-outside space-y-1 pl-8 mt-2">
                <li>Dialogue&apos;s primary purpose is action, not exposition.</li>
                <li>Subtext is the gap between what is said and what is meant, and it is where the real tension
                  of a scene lies.</li>
                <li>Aim for naturalistic dialogue, not a perfect transcript of real speech.</li>
              </ul>
            </li>
            <li>
              <strong>Practical Applications:</strong> The ability to write compelling, subtext-rich dialogue is
              essential for any form of narrative writing. It is the fastest way to reveal character and create
              conflict.
            </li>
            <li>
              <strong>Preview:</strong> In <strong>Lesson 7</strong>, we will begin our focus on the larger
              architecture of story, learning how to assemble our scenes into a powerful, propulsive narrative
              using the principles of <strong>The Three-Act Structure</strong>.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
