// rewards_system_data_en.js

const rewardSystemData = {
  // ==========================================
  // Stage 1: Initiation (3-5 years old) - Blended Version (Base & Challenge)
  // ==========================================
  stage1: {
    title: "Stage 1: Initiation (3-5 years old)",
    description: "Establish basic rule awareness and self-care skills, cultivate initial delayed gratification. Defense focus: Anchor in the physical world, prevent high-frequency screen stimulation from ruining the dopamine threshold.",
    tips: "💡 Note for parents: Daily habits need [Immediate Feedback] (1 coin); Skill challenges should have a frequency limit to prevent fatigue (3 coins).",
    earn: [
      // 🟢 Base Guarantee
      { icon: "🛡️", title: "Self-Care Expert", desc: "Complete any 3: Dress independently, put on shoes, eat well, brush teeth well, nap quietly", coins: 1 },
      { icon: "😌", title: "Emotion Master", desc: "Take a deep breath when angry, no crying or screaming, communicate properly", coins: 1 },
      { icon: "🧸", title: "Tidy Up Toys", desc: "Put toys back in their place after playing", coins: 1 },
      { icon: "🛌", title: "Sleepy Baby", desc: "Lie down quietly after lights out without fussing, fall asleep peacefully", coins: 1 },
      // 🚀 Super Challenge
      { icon: "📖", title: "Little Literati", desc: "Learn to recite a [NEW] poem or short story", coins: 3 },
      { icon: "🍎", title: "Learning Whiz", desc: "Focus on learning a new word or listening to a new picture book", coins: 3 },
      { icon: "🛼", title: "Sports Star", desc: "Practice roller skating, bouncing a ball, or riding a bike seriously", coins: 3 }
    ],
    spend: [
      { level: "🥉 Tiny Joys (Costs just a few coins)", items: [
        { icon: "🌟", title: "Redeem a beautiful sticker or a stamp", cost: 1 },
        { icon: "📖", title: "One extra bedtime story", cost: 3 }
      ]},
      { level: "🥈 Medium Wishes (Save up for a few days!)", items: [
        { icon: "📺", title: "Watch one extra episode of your favorite cartoon", cost: 10 },
        { icon: "🍦", title: "Buy a favorite snack/ice cream on the weekend", cost: 10 }
      ]},
      { level: "🥇 Super Surprise (A week's effort for big happiness!)", items: [
        { icon: "❓", title: "Weekend Outing Mystery Box (Draw to decide where to go!)", cost: 30 }
      ]},
      { level: "💎 Ultimate Grand Prize (You stuck with it, you're the best!)", items: [
        { icon: "🎁", title: "Redeem the new toy you want most", cost: 50 }
      ]}
    ]
  },

  // ==========================================
  // Stage 2: Shaping (6-8 years old) - Upgraded Version (Early Elementary)
  // ==========================================
  stage2: {
    title: "Stage 2: Shaping (6-8 years old)",
    description: "The golden application zone of this system. Adapt to school rules, cultivate basic study habits and long-term delayed gratification. Defense focus: Protect and train 'deep focus'.",
    tips: "💡 Note for parents: Drastically reduce immediate low-level rewards, lengthen the timeline; Study habits focus on 'no reminders' and 'autonomy'.",
    earn: [
      { icon: "✅", title: "Habit Guardian", desc: "[No Reminders] Independently finish all daily homework and pack tomorrow's schoolbag", coins: 5 },
      { icon: "🐛", title: "Bookworm", desc: "Read physical books independently for at least 30 minutes daily", coins: 3 },
      { icon: "🧘", title: "Focus Master", desc: "Complete a task absolutely quietly and without distraction (at least 25 mins)", coins: 4 },
      { icon: "👕", title: "Life Skills UP", desc: "Wash own underwear and socks, or organize own desk", coins: 2 },
      { icon: "🏃", title: "Hardcore PE", desc: "Complete 500 jump ropes / 1km run / 1 hour serious swimming", coins: 3 }
    ],
    spend: [
      { level: "🥉 Daily Small Privileges (1-2 days effort)", items: [
        { icon: "🌙", title: "Late Bedtime Pass (Weekends only, stay up 30 mins later)", cost: 10 },
        { icon: "📱", title: "Redeem 20 mins of high-quality educational video/documentary time", cost: 15 }
      ]},
      { level: "🥈 Weekend Anticipation (A week's persistence)", items: [
        { icon: "🍔", title: "Weekend 'Junk Food' Exemption (Eat McDonald's, etc. once)", cost: 35 },
        { icon: "❓", title: "Weekend Outing Mystery Box (Unlock further destinations)", cost: 40 }
      ]},
      { level: "🥇 Long-Term Big Goal (A month's struggle)", items: [
        { icon: "💰", title: "$15 Super Wish Fund (For books/large Lego sets, etc.)", cost: 100 }
      ]}
    ]
  },

  // ==========================================
  // Stage 3: Differentiation (9-10 years old) - Contract & Privilege Version
  // ==========================================
  stage3: {
    title: "Stage 3: Differentiation (9-10 years old)",
    description: "Shift from specific behavior management to time management, establish a two-way contract spirit. Defense focus: Discern information authenticity, prevent thought laziness caused by algorithm feeding.",
    tips: "💡 Note for parents: Shift from parent-issued tasks to [Two-Way Negotiation]. Rewards must significantly increase 'privilege' and 'social' types.",
    earn: [
      { icon: "⏱️", title: "Time Planning Master", desc: "Independently make a weekend study & rest plan and strictly execute it", coins: 5 },
      { icon: "🧐", title: "Mistake Reviewer", desc: "Independently find the cause of mistakes in exams/homework and explain it clearly to parents", coins: 5 },
      { icon: "🤖", title: "AI Detective", desc: "Ask AI a good question and verify if it's right", coins: 3 },
      { icon: "🧑‍🏫", title: "Little Teacher Privilege", desc: "Explain a new knowledge point clearly to younger kids or family members", coins: 4 },
      { icon: "🧹", title: "Family Pillar", desc: "Independently undertake a complex chore (e.g., cook a simple weekend lunch)", coins: 4 }
    ],
    spend: [
      { level: "🥉 Freedom & Privacy", items: [
        { icon: "🎮", title: "Undisturbed absolute free gaming time (45 mins)", cost: 20 },
        { icon: "💵", title: "Physical Cash Out (Exchange for $3 real pocket money to spend freely)", cost: 20 }
      ]},
      { level: "🥈 Family Decision Power", items: [
        { icon: "🍽️", title: "Decide where/what to eat for a weekend family feast", cost: 40 },
        { icon: "🗺️", title: "Manage and allocate the budget for a short family trip (within limit)", cost: 50 }
      ]},
      { level: "🥇 Social Privileges", items: [
        { icon: "⛺", title: "Invite best friends over for the weekend / host a self-planned party", cost: 80 }
      ]}
    ]
  },

  // ==========================================
  // Stage 4: Exit (11-12+ years old) - System Phase-Out Version
  // ==========================================
  stage4: {
    title: "Stage 4: Exit (11-12+ years old)",
    description: "Intrinsic motivation truly awakens. Micro token economy gradually collapses. Defense focus: Establish high-level achievements in the real world, resist 'lying flat' in the virtual world.",
    tips: "💡 Note for parents: Stop managing daily micro-behaviors. Shift to macro goals and Project-Based Learning (PBL). The system prepares to naturally phase out.",
    earn: [
      { icon: "🎯", title: "Macro Goal Achieved", desc: "Reach the agreed target score in midterm/final exams", coins: 50 },
      { icon: "🚀", title: "Skill Master", desc: "Self-learn a new real-world skill and show results (e.g., video editing/coding)", coins: 30 },
      { icon: "🛠️", title: "Project-Based Challenge (PBL)", desc: "Complete a big project: e.g., plan a full itinerary for a long family trip", coins: 30 },
      { icon: "🎤", title: "Knowledge Output", desc: "Give a 20-min in-depth PPT presentation to the family on an area of interest", coins: 20 },
      { icon: "🤝", title: "Great Family Contribution", desc: "Provide substantial help and constructive advice when the family faces difficulties/major decisions", coins: 20 }
    ],
    spend: [
      { level: "🥇 High-Level Privileges (Full Autonomy Handover)", items: [
        { icon: "💳", title: "Completely convert to real 'Monthly Lump Sum Pocket Money' autonomy", cost: 100 },
        { icon: "🎫", title: "Get Out of Jail Free Card: Offset one parental lecture or conflict", cost: 50 },
        { icon: "🧳", title: "Fully fund a self-planned short independent trip (requires safety approval)", cost: 200 }
      ]}
    ]
  }
};
