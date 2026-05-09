<template>
  <div class="bm-grid">

    <!-- ── BEFORE ─────────────────────────────────────────── -->
    <div class="bm-card">
      <div class="bm-label bm-label-before">{{ $t('market_making.bubblemap_before') }}</div>
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" class="bm-svg">
        <rect width="400" height="260" fill="#0e1420" rx="14"/>

        <defs>
          <!-- tip of arrow IS at x2,y2 (refX = markerWidth) -->
          <marker id="arr-gray"   markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.25)"/>
          </marker>
          <marker id="arr-pink"   markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(233,30,140,0.75)"/>
          </marker>
          <marker id="arr-purple" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(156,39,176,0.75)"/>
          </marker>
        </defs>

        <!--
          Layout:
            Big #1  (42%):  cx=155  cy=148  r=63
            Big #2 (17.4%): cx=312  cy=95   r=42
            Big #3  (10%):  cx=332  cy=210  r=28
            Med 8.1%:       cx=72   cy=50   r=22

          Pink cluster 1 (top-left, chains to 8.1% → #1):
            P1a cx=25  cy=28  r=9
            P1b cx=46  cy=16  r=8
            P1c cx=20  cy=52  r=7

          Pink cluster 2 (bottom-left → #1):
            P2a cx=28  cy=192 r=9
            P2b cx=50  cy=212 r=8
            P2c cx=36  cy=230 r=7

          Purple cluster (top-right → #2):
            Pp1 cx=370 cy=44  r=10
            Pp2 cx=388 cy=78  r=8
        -->

        <!-- ═══ Draw lines FIRST so circles render on top ═══ -->

        <!-- Big holders: #1 → #2 (direction unit ≈ (0.947, -0.320)) -->
        <!-- start = edge of #1 toward #2: (155+63*0.947, 148+63*(-0.320)) = (215, 128) -->
        <!-- end   = edge of #2 from #1:   (312-42*0.947, 95-42*(-0.320)) = (272, 108) -->
        <line x1="215" y1="128" x2="272" y2="108"
              stroke="rgba(255,255,255,0.22)" stroke-width="1.2" marker-end="url(#arr-gray)"/>

        <!-- #2 → #3 (unit ≈ (0.171, 0.985)) -->
        <!-- start = (312+42*0.171, 95+42*0.985) = (319, 136) -->
        <!-- end   = (332-28*0.171, 210-28*0.985) = (327, 182) -->
        <line x1="319" y1="136" x2="327" y2="182"
              stroke="rgba(255,255,255,0.22)" stroke-width="1.2" marker-end="url(#arr-gray)"/>

        <!-- #1 → #3 (unit ≈ (0.943, 0.331)) faint -->
        <!-- start = (155+63*0.943, 148+63*0.331) = (214, 169) -->
        <!-- end   = (332-28*0.943, 210-28*0.331) = (305, 201) -->
        <line x1="214" y1="169" x2="305" y2="201"
              stroke="rgba(255,255,255,0.12)" stroke-width="1" marker-end="url(#arr-gray)"/>

        <!-- 8.1% → Big #1 (unit ≈ (0.646, 0.763)) -->
        <!-- start = (72+22*0.646, 50+22*0.763) = (86, 67) -->
        <!-- end   = (155-63*0.646, 148-63*0.763) = (114, 100) -->
        <line x1="86" y1="67" x2="114" y2="100"
              stroke="rgba(255,255,255,0.18)" stroke-width="1" marker-end="url(#arr-gray)"/>

        <!-- Pink cluster 1 internal: P1a → P1b -->
        <!-- P1a(25,28,r=9) → P1b(46,16,r=8): unit=(0.830,-0.557) -->
        <!-- start=(25+9*0.830, 28+9*(-0.557))=(32,23), end=(46-8*0.830,16-8*(-0.557))=(39,20) -->
        <line x1="32" y1="23" x2="39" y2="20"
              stroke="rgba(233,30,140,0.5)" stroke-width="1" marker-end="url(#arr-pink)"/>

        <!-- P1b → 8.1%: P1b(46,16,r=8) → 8.1%(72,50,r=22): unit=(0.606,0.796) -->
        <!-- start=(46+8*0.606,16+8*0.796)=(51,22), end=(72-22*0.606,50-22*0.796)=(59,32) -->
        <line x1="51" y1="22" x2="59" y2="32"
              stroke="rgba(233,30,140,0.45)" stroke-width="1" marker-end="url(#arr-pink)"/>

        <!-- P1c → 8.1%: P1c(20,52,r=7) → 8.1%(72,50,r=22): unit=(0.999,-0.038) -->
        <!-- start=(20+7,52)=(27,52), end=(72-22,50)=(50,50) -->
        <line x1="27" y1="52" x2="50" y2="51"
              stroke="rgba(233,30,140,0.4)" stroke-width="1" marker-end="url(#arr-pink)"/>

        <!-- Pink cluster 2 internal: P2a → P2b -->
        <!-- P2a(28,192,r=9) → P2b(50,212,r=8): unit=(0.740,0.672) -->
        <!-- start=(28+9*0.74,192+9*0.672)=(35,198), end=(50-8*0.74,212-8*0.672)=(44,207) -->
        <line x1="35" y1="198" x2="44" y2="207"
              stroke="rgba(233,30,140,0.5)" stroke-width="1" marker-end="url(#arr-pink)"/>

        <!-- P2b → P2c: P2b(50,212,r=8) → P2c(36,230,r=7): unit=(-0.612,0.790) -->
        <!-- start=(50+8*(-0.612),212+8*0.790)=(45,218), end=(36-7*(-0.612),230-7*0.790)=(40,224) -->
        <line x1="45" y1="218" x2="40" y2="224"
              stroke="rgba(233,30,140,0.45)" stroke-width="1" marker-end="url(#arr-pink)"/>

        <!-- P2a → Big #1: P2a(28,192,r=9) → #1(155,148,r=63): unit=(0.945,-0.328) -->
        <!-- start=(28+9*0.945,192+9*(-0.328))=(36,189), end=(155-63*0.945,148-63*(-0.328))=(95,169) -->
        <line x1="36" y1="189" x2="95" y2="169"
              stroke="rgba(233,30,140,0.28)" stroke-width="1" marker-end="url(#arr-pink)"/>

        <!-- Purple cluster internal: Pp1 → Pp2: unit=(0.472,0.882) -->
        <!-- Pp1(370,44,r=10) → Pp2(388,78,r=8) -->
        <!-- start=(370+10*0.472,44+10*0.882)=(375,53), end=(388-8*0.472,78-8*0.882)=(384,71) -->
        <line x1="375" y1="53" x2="384" y2="71"
              stroke="rgba(156,39,176,0.5)" stroke-width="1" marker-end="url(#arr-purple)"/>

        <!-- Pp1 → Big #2: Pp1(370,44,r=10) → #2(312,95,r=42): unit=(-0.752,0.659) -->
        <!-- start=(370+10*(-0.752),44+10*0.659)=(362,51), end=(312-42*(-0.752),95-42*0.659)=(344,67) -->
        <line x1="362" y1="51" x2="344" y2="67"
              stroke="rgba(156,39,176,0.45)" stroke-width="1" marker-end="url(#arr-purple)"/>

        <!-- Pp2 → Big #2: Pp2(388,78,r=8) → #2(312,95,r=42): unit=(-0.975,0.221) -->
        <!-- start=(388+8*(-0.975),78+8*0.221)=(380,80), end=(312-42*(-0.975),95-42*0.221)=(353,86) -->
        <line x1="380" y1="80" x2="353" y2="86"
              stroke="rgba(156,39,176,0.4)" stroke-width="1" marker-end="url(#arr-purple)"/>

        <!-- ═══ Circles ON TOP of lines ═══ -->

        <!-- Big holders -->
        <circle cx="155" cy="148" r="63" fill="#1a2744" stroke="#2a3f6a" stroke-width="1.5"/>
        <text x="155" y="143" text-anchor="middle" fill="rgba(255,255,255,0.85)"
              font-size="14" font-family="Montserrat,sans-serif" font-weight="700">42.0%</text>
        <text x="155" y="160" text-anchor="middle" fill="rgba(255,255,255,0.30)"
              font-size="9"  font-family="Montserrat,sans-serif">#1</text>

        <circle cx="312" cy="95" r="42" fill="#1a2744" stroke="#2a3f6a" stroke-width="1.5"/>
        <text x="312" y="90"  text-anchor="middle" fill="rgba(255,255,255,0.80)"
              font-size="12" font-family="Montserrat,sans-serif" font-weight="700">17.4%</text>
        <text x="312" y="107" text-anchor="middle" fill="rgba(255,255,255,0.30)"
              font-size="9"  font-family="Montserrat,sans-serif">#2</text>

        <circle cx="332" cy="210" r="28" fill="#1a2744" stroke="#2a3f6a" stroke-width="1.5"/>
        <text x="332" y="214" text-anchor="middle" fill="rgba(255,255,255,0.70)"
              font-size="10" font-family="Montserrat,sans-serif" font-weight="700">10.0%</text>

        <!-- Medium 8.1% -->
        <circle cx="72" cy="50" r="22" fill="#182240" stroke="#243360" stroke-width="1"/>
        <text x="72" y="54" text-anchor="middle" fill="rgba(255,255,255,0.55)"
              font-size="9" font-family="Montserrat,sans-serif">8.1%</text>

        <!-- Pink cluster 1 -->
        <circle cx="25"  cy="28"  r="9" fill="#e91e8c" opacity="0.82"/>
        <circle cx="46"  cy="16"  r="8" fill="#e91e8c" opacity="0.75"/>
        <circle cx="20"  cy="52"  r="7" fill="#e91e8c" opacity="0.70"/>

        <!-- Pink cluster 2 -->
        <circle cx="28"  cy="192" r="9" fill="#e91e8c" opacity="0.78"/>
        <circle cx="50"  cy="212" r="8" fill="#e91e8c" opacity="0.72"/>
        <circle cx="36"  cy="230" r="7" fill="#e91e8c" opacity="0.65"/>

        <!-- Purple cluster -->
        <circle cx="370" cy="44"  r="10" fill="#9c27b0" opacity="0.82"/>
        <circle cx="388" cy="78"  r="8"  fill="#9c27b0" opacity="0.75"/>
      </svg>
      <div class="bm-stat bm-stat-warn">Top 3 wallets hold <span>69.4%</span> of supply</div>
    </div>

    <!-- ── AFTER ──────────────────────────────────────────── -->
    <div class="bm-card bm-card-after">
      <div class="bm-label bm-label-after">{{ $t('market_making.bubblemap_after') }}</div>
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" class="bm-svg">
        <rect width="400" height="260" fill="#0e1420" rx="14"/>

        <!-- Many small equal-sized distributed bubbles, no connections -->
        <!-- All bubbles represent < 1% of supply                       -->

        <!-- Row 1 (y≈30) -->
        <circle cx="32"  cy="30"  r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="82"  cy="24"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="132" cy="32"  r="12" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="182" cy="22"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="232" cy="32"  r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="282" cy="24"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="332" cy="32"  r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="378" cy="24"  r="9"  fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.8"/>

        <!-- Row 2 (y≈78) -->
        <circle cx="56"  cy="78"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="106" cy="70"  r="12" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="157" cy="80"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="207" cy="72"  r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="257" cy="82"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="307" cy="72"  r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="358" cy="80"  r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>

        <!-- Row 3 (y≈130) -->
        <circle cx="32"  cy="130" r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="82"  cy="122" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="134" cy="132" r="12" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="184" cy="124" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="234" cy="134" r="12" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="284" cy="124" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="334" cy="132" r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="380" cy="124" r="9"  fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>

        <!-- Row 4 (y≈180) -->
        <circle cx="56"  cy="180" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="106" cy="172" r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="157" cy="182" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="207" cy="174" r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="257" cy="184" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="307" cy="172" r="12" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="358" cy="182" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>

        <!-- Row 5 (y≈232) -->
        <circle cx="32"  cy="232" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="82"  cy="240" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="132" cy="232" r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="182" cy="240" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="232" cy="232" r="11" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="282" cy="240" r="10" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.85"/>
        <circle cx="332" cy="232" r="12" fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.9"/>
        <circle cx="378" cy="240" r="9"  fill="#1a3a5e" stroke="#2a5078" stroke-width="1" opacity="0.8"/>

        <!-- % labels centered inside chosen bubbles — all < 1% -->
        <!-- label y = cy + 2.5 for font-size 7 visual centering  -->
        <text x="132" y="35"  text-anchor="middle" fill="rgba(255,255,255,0.50)"
              font-size="7" font-family="Montserrat,sans-serif">0.8%</text>
        <text x="234" y="137" text-anchor="middle" fill="rgba(255,255,255,0.50)"
              font-size="7" font-family="Montserrat,sans-serif">0.6%</text>
        <text x="106" y="175" text-anchor="middle" fill="rgba(255,255,255,0.50)"
              font-size="7" font-family="Montserrat,sans-serif">0.5%</text>
      </svg>
      <div class="bm-stat bm-stat-ok">Supply spread across <span>80+</span> independent wallets</div>
    </div>

  </div>
</template>

<style scoped>
.bm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.bm-card {
  background: #1b1b1b;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.bm-card-after {
  border-color: rgba(52,251,255,0.2);
  box-shadow: 0 0 24px rgba(52,251,255,0.05);
}
.bm-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}
.bm-label-before { color: #888; }
.bm-label-after  { color: #34FBFF; }
.bm-svg { width: 100%; height: auto; border-radius: 10px; }
.bm-stat {
  font-size: 0.82rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 20px;
  align-self: flex-start;
}
.bm-stat-warn {
  background: rgba(255,80,80,0.12);
  color: #FF8080;
}
.bm-stat-warn span { font-weight: 700; }
.bm-stat-ok {
  background: rgba(52,251,255,0.1);
  color: #34FBFF;
}
.bm-stat-ok span { font-weight: 700; }

@media (max-width: 768px) {
  .bm-grid { grid-template-columns: 1fr; }
}
</style>
