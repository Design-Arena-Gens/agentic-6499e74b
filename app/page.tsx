const SIZE_DATA = [
  { size: "XS", bust: "28\" - 30\"", yarn: "900 yds" },
  { size: "S", bust: "32\" - 34\"", yarn: "1025 yds" },
  { size: "M", bust: "36\" - 38\"", yarn: "1150 yds" },
  { size: "L", bust: "40\" - 42\"", yarn: "1275 yds" },
  { size: "XL", bust: "44\" - 46\"", yarn: "1400 yds" },
  { size: "2XL", bust: "48\" - 50\"", yarn: "1525 yds" },
  { size: "3XL", bust: "52\" - 54\"", yarn: "1650 yds" },
];

const SIZING_CHART = [
  { bust: "28\"", width: "17\"" },
  { bust: "30\"", width: "18\"" },
  { bust: "32\"", width: "19\"" },
  { bust: "34\"", width: "20\"" },
  { bust: "36\"", width: "21\"" },
  { bust: "38\"", width: "22\"" },
  { bust: "40\"", width: "23\"" },
  { bust: "42\"", width: "24\"" },
  { bust: "44\"", width: "25\"" },
  { bust: "46\"", width: "26\"" },
  { bust: "48\"", width: "27\"" },
  { bust: "50\"", width: "28\"" },
  { bust: "52\"", width: "29\"" },
  { bust: "54\"", width: "30\"" },
];

export default function Page() {
  return (
    <main>
      <header className="hero-banner">
        <div>
          <p className="section-title">Beginner Crochet Course</p>
          <h1>Eloise Cardigan: Cozy Rectangles, Effortless Style</h1>
          <p>
            Welcome, maker friend! I designed this workshop so you can stitch the
            Eloise Cardigan with confidence, joy, and a calm heart. We will move
            slowly, celebrate every row, and enjoy how three simple rectangles
            become a flowy cardigan with two different looks.
          </p>
        </div>
        <div>
          <div className="section-card">
            <h2>Two Looks, One Pattern</h2>
            <ul>
              <li>
                <strong>Cropped &amp; Playful:</strong> Just hip-length with a
                light swing, perfect over dresses or high-waisted jeans.
              </li>
              <li>
                <strong>Long &amp; Cozy:</strong> Mid-thigh drape and extra
                snuggle factor, ideal for layering through chilly seasons.
              </li>
            </ul>
            <p>
              You can switch between looks simply by adjusting your panel length.
              No increases, no decreases—just soothing, straight rows.
            </p>
          </div>
        </div>
      </header>

      <section className="section-card">
        <p className="section-title">Materials</p>
        <h2>Gather Your Supplies</h2>
        <p>
          Choose your favorite worsted weight (#4) yarn and a comfortable hook.
          Keep a notepad handy to track row counts—it makes custom fitting a
          breeze.
        </p>
        <div className="two-column">
          <div>
            <h3>Hooks &amp; Tools</h3>
            <ul>
              <li>5.5 mm (I-9) or 6 mm (J-10) crochet hook</li>
              <li>Tapestry needle for seaming and finishing</li>
              <li>Sharp scissors</li>
              <li>Removable stitch markers (helpful for counting rows)</li>
              <li>Measuring tape (for quick bust and length checks)</li>
            </ul>
          </div>
          <div>
            <h3>Yarn Yardage Guide</h3>
            <ul>
              {SIZE_DATA.map((entry) => (
                <li key={entry.size}>
                  <strong>{entry.size}</strong> ({entry.bust}) — {entry.yarn}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="callout">
          <strong>Encouragement:</strong> If you are between sizes, size up for a
          softer drape or size down for a neat, tailored fit. You can always add a
          few extra rows for length later.
        </div>
      </section>

      <section className="section-card">
        <p className="section-title">Sizing Chart</p>
        <h2>Choose Your Panel Width</h2>
        <p>
          Measure your full bust and follow the table below for recommended back
          panel widths. Front panels are each half of the back width.
        </p>
        <table>
          <thead>
            <tr>
              <th>Bust Measurement</th>
              <th>Suggested Back Panel Width</th>
            </tr>
          </thead>
          <tbody>
            {SIZING_CHART.map((row) => (
              <tr key={row.bust}>
                <td>{row.bust}</td>
                <td>{row.width}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <span className="highlight">Tip:</span> Keep an ease allowance of 6"–8"
          (15–20 cm) for relaxed movement. That ease is already built into these
          measurements, so just pick the width that aligns with your bust and
          enjoy the flowy comfort.
        </p>
      </section>

      <section className="section-card">
        <p className="section-title">Construction Guide</p>
        <h2>Back Panel</h2>
        <ol>
          <li>
            <strong>Foundation Chain:</strong> Chain a length equal to your
            desired panel width. Example: for a 42" bust, chain to reach 23".
          </li>
          <li>
            <strong>Row 1:</strong> Work one row of half double crochet (HDC) or
            extended single crochet (ESC) into each chain. Both stitches give a
            supple fabric. Turn.
          </li>
          <li>
            <strong>Rows 2–?</strong> Continue in your chosen stitch until the
            panel reaches your desired length:
            <ul>
              <li>Cropped look: 18"–20" long</li>
              <li>Long look: 28"–32" long</li>
            </ul>
            Finish with an even row, then fasten off leaving a 20" tail for
            seaming.
          </li>
        </ol>
        <h2>Front Panels</h2>
        <ol>
          <li>
            <strong>Foundation Chains (Make 2):</strong> Chain to half the back
            width. Example: if the back is 23" wide, each front starts with a
            chain that measures 11.5".
          </li>
          <li>
            <strong>Rows 1–?</strong> Mirror the stitch pattern from the back
            panel. Match the row count so seams align perfectly.
          </li>
          <li>
            <strong>Optional Neckline Slope:</strong> For a softer opening, stop
            each front panel 2" shorter than the back, then add length later with
            the border.
          </li>
        </ol>
        <h3>Adjusting Length for Your Style</h3>
        <p>
          Try on the panels against your body as you work. Add or subtract sets of
          two rows until you love the drape. Remember: worsted yarn relaxes after
          blocking, so stop when the garment is 1" shy of your target.
        </p>
      </section>

      <section className="section-card">
        <p className="section-title">Assembly</p>
        <h2>Bring the Cardigan Together</h2>
        <ol>
          <li>
            <strong>Shoulder Seams:</strong> Lay the back panel flat, right side
            up. Place each front panel on top, right sides together. Seam the top
            5"–6" of each shoulder with a whip stitch or slip stitch seam. Leave
            the neckline open.
          </li>
          <li>
            <strong>Side Seams:</strong> With right sides together, seam from the
            hem upward, stopping 8"–10" below the shoulder seam to create roomy,
            flowy sleeves. Secure ends firmly.
          </li>
          <li>
            <strong>Try-On Moment:</strong> Turn your cardigan right side out and
            slip it on. Adjust seam length if you prefer a narrower sleeve or want
            more swing.
          </li>
        </ol>
      </section>

      <section className="section-card">
        <p className="section-title">Finishing Touches</p>
        <h2>Border &amp; Details</h2>
        <ol>
          <li>
            <strong>Simple Border:</strong> Join yarn at the bottom hem. Work one
            round of single crochet evenly around the entire cardigan opening,
            including neckline and hem. Keep your tension relaxed.
          </li>
          <li>
            <strong>Optional Second Round:</strong> Add a second round of half
            double crochet for a cushier edge or switch to slip stitches for a
            minimalist finish.
          </li>
          <li>
            <strong>Weave In Ends:</strong> Use the tapestry needle to weave each
            tail through the stitch columns in at least two directions for
            durability.
          </li>
          <li>
            <strong>Blocking:</strong> Lightly steam or wet block the cardigan on
            a flat surface, smoothing seams and easing the fabric into its final
            shape.
          </li>
        </ol>
        <div className="callout">
          <strong>Celebrate!</strong> Take photos of your Eloise in both lengths.
          Share your joy with friends—you just created a wardrobe staple from
          three simple rectangles.
        </div>
      </section>

      <section className="section-card">
        <p className="section-title">Color Confidence</p>
        <h2>Choosing Solid vs. Variegated Yarn</h2>
        <p>
          The Eloise Cardigan shines in both solid and variegated colorways. Use
          these quick cues to decide what will make your heart sing.
        </p>
        <div className="two-column">
          <div>
            <h3>When to Choose Solid Shades</h3>
            <ul>
              <li>Highlight the clean stitch columns and straight-row texture.</li>
              <li>Create a capsule wardrobe piece that pairs with everything.</li>
              <li>
                Let bold buttons or statement jewelry take center stage without
                visual competition.
              </li>
            </ul>
          </div>
          <div>
            <h3>Why Variegated Works Beautifully</h3>
            <ul>
              <li>
                Adds movement and visual interest to the minimalist construction.
              </li>
              <li>
                Plays up the drape—color pools create soft waves in those flowy
                sleeves.
              </li>
              <li>
                Perfect for stash-busting coordinated skeins; alternate every two
                rows to blend colorways seamlessly.
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span className="highlight">Instructor Note:</span> If your variegated
          yarn has high contrast, swatch first to check for flashing. Break up
          pooling by alternating skeins or working shorter row repeats. If you
          crave calm, reach for tonal or lightly speckled colorways.
        </p>
      </section>

      <section className="section-card">
        <p className="section-title">Cheat Sheet</p>
        <h2>Quick Reference</h2>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust Measurement</th>
              <th>Panel Width (Back)</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XS/S</td>
              <td>28" - 34"</td>
              <td>18" - 20"</td>
              <td>Absolute Beginner</td>
            </tr>
            <tr>
              <td>M/L</td>
              <td>36" - 42"</td>
              <td>22" - 24"</td>
              <td>Absolute Beginner</td>
            </tr>
            <tr>
              <td>XL/2XL</td>
              <td>44" - 50"</td>
              <td>26" - 28"</td>
              <td>Absolute Beginner</td>
            </tr>
            <tr>
              <td>3XL</td>
              <td>52" - 54"</td>
              <td>30"</td>
              <td>Absolute Beginner</td>
            </tr>
          </tbody>
        </table>
        <p>
          Print this page and keep it in your project bag. A quick glance keeps
          your sizing on track wherever you crochet.
        </p>
      </section>

      <section className="section-card">
        <p className="section-title">Image Prompts</p>
        <h2>Create Visuals for Your Course</h2>
        <div className="prompt-card">
          <h3>Hero Image — Finished Look</h3>
          <code>
            A high-resolution, lifestyle photo of a woman wearing a handmade
            crochet cardigan made of variegated worsted weight yarn. The cardigan
            has a relaxed fit, flowy sleeves, and a clean rectangular construction.
            Soft natural lighting, boho-chic style, white background, 8k
            resolution, professional knitwear photography.
          </code>
        </div>
        <div className="prompt-card">
          <h3>Technical Diagram — Construction Layout</h3>
          <code>
            A flat-lay instructional diagram showing three crochet rectangles laid
            out to form a cardigan. One large back panel and two narrower front
            panels. Minimalist aesthetic, soft pastel yarn colors, clear labels,
            top-down view, high contrast for educational use.
          </code>
        </div>
        <div className="prompt-card">
          <h3>Stitch Detail — Texture Close-Up</h3>
          <code>
            Extreme close-up of a crochet fabric worked in straight rows using
            worsted weight yarn. Focus on the 'V' shape of the stitches and the
            halo of the wool. Warm lighting, macro photography, showing the
            texture of a 'no-shaping' garment.
          </code>
        </div>
      </section>

      <footer>
        Crafted with care to make your crochet journey gentle, achievable, and
        wonderfully stylish. You are ready—let's stitch the Eloise together.
      </footer>
    </main>
  );
}
