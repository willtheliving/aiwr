/* eslint-disable @next/next/no-img-element */
"use client"; // This page is highly interactive (filters, modals).

import { useState, useEffect } from "react";
// Removed 'next/image' import to resolve compilation error in this environment.
// Using standard <img> tag instead.
import { X } from "lucide-react";

// Define the structure of a book object for TypeScript
interface BookItem {
  title: string;
  author: string;
  category: string;
  description: string;
  imageUrl: string; // New property for the book cover image
  purchaseUrl?: string; // Optional link to purchase or learn more
}

// Centralized and expanded book data from the provided PDF.
const books: BookItem[] = [
  // AI Books (from original code)
  {
    title: "Co-Intelligence",
    author: "Ethan Mollick (2024)",
    category: "AI Books",
    description: "The definitive, bestselling guide to living and working with AI.",
    imageUrl: "https://covers.openlibrary.org/b/id/14805433-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/741805/co-intelligence-by-ethan-mollick/",
  },
  // Writing Fundamentals
  {
    title: "On Writing: A Memoir of the Craft",
    author: "Stephen King (2020)",
    category: "Writing Fundamentals",
    description: "This seminal work fuses autobiography with practical writing wisdom. King's core message remains powerfully direct: 'If you want to be a writer, you must do two things above all others: read a lot and write a lot'.",
    imageUrl: "https://covers.openlibrary.org/b/olid/OL6781880M-L.jpg",
    purchaseUrl: "https://stephenking.com/works/nonfiction/on-writing-a-memoir-of-the-craft.html",
  },
  {
    title: "Bird by Bird: Some Instructions on Writing and Life",
    author: "Anne Lamott (1994)",
    category: "Writing Fundamentals",
    description: "Lamott champions breaking down daunting writing projects into manageable pieces—tackling them 'bird by bird.' The book confronts the psychological hurdles inherent in writing, from crippling perfectionism to gnawing self‑doubt.",
    imageUrl: "https://covers.openlibrary.org/b/id/418127-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/97395/bird-by-bird-by-anne-lamott/",
  },
  {
    title: "Reading Like a Writer",
    author: "Francine Prose (2006)",
    category: "Writing Fundamentals",
    description: "Prose teaches writers how to slow down and read deliberately, analyzing the choices other authors make in order to learn the craft from the inside out. It's a masterclass in learning from the greats.",
    imageUrl: "https://covers.openlibrary.org/b/id/6397118-L.jpg",
    purchaseUrl: "https://en.wikipedia.org/wiki/Reading_Like_a_Writer",
  },
  {
    title: "Big Magic: Creative Living Beyond Fear",
    author: "Elizabeth Gilbert (2015)",
    category: "Writing Fundamentals",
    description: "Gilbert offers a joyful and inspiring take on creativity, encouraging writers to embrace curiosity, let go of suffering, and approach their work with a sense of wonder rather than fear.",
    imageUrl: "https://covers.openlibrary.org/b/olid/OL27190146M-L.jpg",
    purchaseUrl: "https://www.elizabethgilbert.com/books/big-magic/",
  },
  {
    title: "Ernest Hemingway on Writing",
    author: "Edited by Larry W. Phillips",
    category: "Writing Fundamentals",
    description: "A potent collection of thoughts from one of literature's masters on the discipline, mechanics, and psychology of writing. This book offers direct, unfiltered advice on crafting powerful prose.",
    imageUrl: "https://covers.openlibrary.org/b/id/427732-L.jpg",
    purchaseUrl: "https://www.simonandschuster.com/books/Ernest-Hemingway-on-Writing/Larry-W-Phillips/9780684854298",
  },
  // Fiction Guides
  {
    title: "The Art of Fiction: Notes on Craft for Young Writers",
    author: "John Gardner (1991)",
    category: "Fiction Guides",
    description: "A foundational text that treats fiction writing as a moral and aesthetic art form. Gardner's advice is philosophical yet practical, focusing on creating the 'vivid and continuous dream' for the reader.",
    imageUrl: "https://covers.openlibrary.org/b/id/7002226-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/58230/the-art-of-fiction-by-john-gardner/",
  },
  {
    title: "Writing Fiction: A Guide to Narrative Craft",
    author: "Janet Burroway (2019)",
    category: "Fiction Guides",
    description: "Widely used in creative writing programs, this is a comprehensive textbook that covers all the essential elements of narrative craft, from character and plot to dialogue and setting, with helpful exercises.",
    imageUrl: "https://covers.openlibrary.org/b/id/191719-L.jpg",
    purchaseUrl: "https://press.uchicago.edu/ucp/books/book/chicago/W/bo36156857.html",
  },
  {
    title: "Steering the Craft: A Twenty-First-Century Guide to Sailing the Sea of Story",
    author: "Ursula K. Le Guin (2024)",
    category: "Fiction Guides",
    description: "Le Guin provides a master's toolkit for prose style. Less about plot and more about the music of language, this book offers elegant exercises to help writers refine their sentences and narrative voice.",
    imageUrl: "https://covers.openlibrary.org/b/id/11946279-L.jpg",
    purchaseUrl: "https://www.ursulakleguin.com/steering-the-craft",
  },
  {
    title: "The Anatomy of Story: 22 Steps to Becoming a Master Storyteller",
    author: "John Truby (2008)",
    category: "Fiction Guides",
    description: "Truby rejects formulaic plot structures in favor of an organic, 22-step process that helps writers build a compelling story from the ground up, focusing on character desire and moral choice.",
    imageUrl: "https://covers.openlibrary.org/b/id/13319547-L.jpg",
    purchaseUrl: "https://us.macmillan.com/books/9780865479937/theanatomyofstory/",
  },
  {
    title: "Into the Woods: A Five-Act Journey Into Story",
    author: "John Yorke (2013)",
    category: "Fiction Guides",
    description: "Yorke argues that all stories share a fundamental, symmetrical structure rooted in human psychology. This book is a deep dive into the 'why' of storytelling, exploring the universal patterns that make narratives resonate.",
    imageUrl: "https://covers.openlibrary.org/b/id/14669640-L.jpg",
  },
  {
    title: "Save the Cat! Writes a Novel",
    author: "Jessica Brody (2018)",
    category: "Fiction Guides",
    description: "This book masterfully adapts the famous 'Save the Cat!' screenwriting formula for novelists, offering a practical, beat-by-beat roadmap for plotting a commercially successful story.",
    imageUrl: "https://covers.openlibrary.org/b/id/10148215-L.jpg",
    purchaseUrl: "https://savethecat.com/products/books/save-the-cat-writes-a-novel",
  },
  // Literary Analysis
  {
    title: "Mystery and Manners: Occasional Prose",
    author: "Flannery O'Connor (1969)",
    category: "Literary Analysis",
    description: "A collection of brilliant essays and lectures on faith, morality, and the art of fiction. O'Connor's insights into the grotesque and the sacred provide a profound education for any serious writer.",
    imageUrl: "https://covers.openlibrary.org/b/id/8323080-L.jpg",
    purchaseUrl: "https://us.macmillan.com/books/9780374508043/mysteryandmanners/",
  },
  {
    title: "A Swim in a Pond in the Rain",
    author: "George Saunders (2021)",
    category: "Literary Analysis",
    description: "Based on his legendary MFA class, Saunders dissects seven classic Russian short stories to reveal the mechanics of great writing. It's a joyful and illuminating masterclass in cause-and-effect, escalation, and reader empathy.",
    imageUrl: "https://covers.openlibrary.org/b/id/10351216-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/609280/a-swim-in-a-pond-in-the-rain-by-george-saunders/",
  },
  {
    title: "The Art of the Short Story",
    author: "Dana Gioia & R.S. Gwynn (2006)",
    category: "Literary Analysis",
    description: "An essential anthology and craft guide for short fiction writers. It not only showcases some of the form's greatest examples but also provides critical commentary on the elements that make them work.",
    imageUrl: "https://covers.openlibrary.org/b/id/8403886-L.jpg",
    purchaseUrl: "https://openlibrary.org/works/OL19087647W/The_Art_of_the_Short_Story?edition=",
  },
  {
    title: "How Fiction Works",
    author: "James Wood (2008)",
    category: "Literary Analysis",
    description: "A renowned critic provides an accessible and elegant examination of the mechanics of fiction. Wood explores core concepts like narration, detail, and character, making complex ideas clear for aspiring writers.",
    imageUrl: "https://covers.openlibrary.org/b/id/3368202-L.jpg",
    purchaseUrl: "https://us.macmillan.com/books/9781250183927/howfictionworks/",
  },
  {
    title: "Aspects of a Novel",
    author: "E.M. Forster (2022)",
    category: "Literary Analysis",
    description: "A foundational work of literary criticism based on Forster's 1927 lectures. It offers timeless insights into the seven key elements of a novel: story, people, plot, fantasy, prophecy, pattern, and rhythm.",
    imageUrl: "https://www.gutenberg.org/cache/epub/70492/pg70492.cover.medium.jpg",
    purchaseUrl: "https://www.gutenberg.org/ebooks/70492",
  },
  // Writing Process
  {
    title: "The Elements of Style",
    author: "William Strunk Jr. & E.B. White (1999)",
    category: "Writing Process",
    description: "The quintessential guide to clean, clear, and effective English prose. Its rules on composition and style are timeless, making it an indispensable reference for any writer committed to precision.",
    imageUrl: "https://www.gutenberg.org/cache/epub/37134/pg37134.cover.medium.jpg",
    purchaseUrl: "https://www.gutenberg.org/ebooks/37134",
  },
  {
    title: "The Portable MFA in Creative Writing",
    author: "The New York Writers Workshop (2006)",
    category: "Writing Process",
    description: "A comprehensive collection of lessons, prompts, and exercises covering fiction, nonfiction, and poetry. It's like having a complete writing workshop curriculum in a single volume.",
    imageUrl: "https://covers.openlibrary.org/b/id/11703357-L.jpg",
    purchaseUrl: "https://www.timtomlinson.org/the-portable-mfa-in-creative-writing.html",
  },
  {
    title: "Several Short Sentences About Writing",
    author: "Verlyn Klinkenborg (2012)",
    category: "Writing Process",
    description: "A radical and profound guide to the craft of writing at the sentence level. Klinkenborg challenges conventional wisdom and teaches writers to see their sentences as individual units of meaning and rhythm.",
    imageUrl: "https://covers.openlibrary.org/b/id/14503474-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/93789/several-short-sentences-about-writing-by-verlyn-klinkenborg/",
  },
  {
    title: "The Writing Life",
    author: "Annie Dillard (1989)",
    category: "Writing Process",
    description: "A short, poetic, and unflinchingly honest look at the brutal realities and profound joys of a writer's life. Dillard's reflections on dedication, sacrifice, and the creative process are both sobering and inspiring.",
    imageUrl: "https://covers.openlibrary.org/b/id/11529243-L.jpg",
    purchaseUrl: "https://archive.org/details/writinglife00dill",
  },
  {
    title: "On Writing",
    author: "Charles Bukowski (2016)",
    category: "Writing Process",
    description: "A raw, unfiltered collection of letters detailing the grit, struggle, and sheer persistence required to live a writer's life. It's a powerful dose of reality and inspiration for those committed to the craft.",
    imageUrl: "https://covers.openlibrary.org/b/id/8902811-L.jpg",
    purchaseUrl: "https://archive.org/details/onwriting0000buko",
  },
  {
    title: "Writing Down the Bones: Freeing the Writer Within",
    author: "Natalie Goldberg & Julia Cameron (2016)",
    category: "Writing Process",
    description: "This classic guide uses Zen principles to help writers silence their inner critics and tap into a more intuitive, authentic voice. It's a must-read for anyone struggling with writer's block or self-doubt.",
    imageUrl: "https://covers.openlibrary.org/b/id/671242-L.jpg",
    purchaseUrl: "https://nataliegoldberg.com/books/writing-down-the-bones/",
  },
  // World Building
  {
    title: "Wanderbook: The Illustrated Guide to Creating Imaginative Fiction",
    author: "Jeff VanderMeer (2016)",
    category: "World Building",
    description: "An unparalleled visual guide to world-building and imaginative storytelling. Filled with essays, diagrams, and illustrations, it's an endless source of inspiration for writers of fantasy, sci-fi, and speculative fiction.",
    imageUrl: "https://covers.openlibrary.org/b/id/8453004-L.jpg",
    purchaseUrl: "https://wonderbooknow.com/",
  },
  {
    title: "Writing the Other: A Practical Approach",
    author: "Nisi Shawl and Cynthia Ward (2005)",
    category: "World Building",
    description: "An essential and practical guide for creating authentic, respectful, and nuanced characters from backgrounds different from your own. It provides invaluable tools for writing inclusively and avoiding harmful stereotypes.",
    imageUrl: "https://covers.openlibrary.org/b/id/8733351-L.jpg",
    purchaseUrl: "https://writingtheother.com/the-book/",
  },
  {
    title: "Meander, Spiral, Explode: Design and Pattern in Narrative",
    author: "Jane Alison (2019)",
    category: "World Building",
    description: "A groundbreaking book that challenges the dominance of the traditional narrative arc. Alison explores alternative patterns for storytelling—spirals, waves, networks—opening up a new world of structural possibilities for writers.",
    imageUrl: "https://s37710.pcdn.co/wp-content/uploads/sites/3/2021/08/9781948226134.jpg",
    purchaseUrl: "https://books.catapult.co/books/meander-spiral-explode/",
  },
  // Dialogue & Character
  {
    title: "The Art of Dramatic Writing",
    author: "Lajos Egri (1946)",
    category: "Dialogue & Character",
    description: "A classic text that argues all great drama stems from well-developed characters whose motivations drive the plot. Its focus on the 'premise' and character-driven conflict is essential for writers in any genre.",
    imageUrl: "https://covers.openlibrary.org/b/id/13352466-L.jpg",
    purchaseUrl: "https://archive.org/details/dli.bengal.10689.12919",
  },
  {
    title: "Dialogue: The Art of Verbal Action for Page, Stage, and Screen",
    author: "Robert McKee (2016)",
    category: "Dialogue & Character",
    description: "From the legendary story guru, this is the definitive guide to writing dialogue. McKee teaches that all dialogue must be an 'action' that characters use to pursue their objectives, making every conversation dynamic.",
    imageUrl: "https://covers.openlibrary.org/b/id/7444393-L.jpg",
    purchaseUrl: "https://mckeestory.com/books/dialogue/",
  },
  {
    title: "Characters and Viewpoint",
    author: "Orson Scott Card (1990)",
    category: "Dialogue & Character",
    description: "A practical guide to creating compelling, memorable characters and mastering narrative point of view. Card offers clear techniques for developing character histories, motivations, and voices.",
    imageUrl: "https://covers.openlibrary.org/b/id/10620753-L.jpg",
    purchaseUrl: "https://archive.org/details/charactersviewpointcardorsonscott1988",
  },
  // Nonfiction Guides
  {
    title: "Inventing the Truth: The Art and Craft of Memoir",
    author: "William Zinsser (1998)",
    category: "Nonfiction Guides",
    description: "An indispensable collection of essays by master memoirists. This book explores the central challenge of the genre: how to shape personal experience into a compelling, truthful narrative.",
    imageUrl: "https://covers.openlibrary.org/b/id/6518392-L.jpg",
    purchaseUrl: "https://archive.org/details/inventingtruthth00bake",
  },
  {
    title: "Tell It Slant: Creating, Refining, and Publishing Creative Nonfiction",
    author: "Brenda Miller and Suzanne Paola (2019)",
    category: "Nonfiction Guides",
    description: "A comprehensive and widely-used guide to the art of creative nonfiction. It covers a wide range of forms and provides invaluable exercises for generating ideas, crafting scenes, and finding your voice.",
    imageUrl: "https://www.pw.org/files/styles/literary_magazine/public/small_press_images/413nq6mscal._sx331_bo1204203200_.jpg?itok=xDmebTum",
    purchaseUrl: "https://archive.org/details/tellitslantcreat0000mill",
  },
  {
    title: "Body Work: The Radical Power of Personal Narrative",
    author: "Melissa Febos (2019)",
    category: "Nonfiction Guides",
    description: "A powerful and liberating guide to writing about the self and personal experience. Febos tackles the difficult questions of exposure, confession, and trauma, arguing for the radical power of personal narrative.",
    imageUrl: "https://covers.openlibrary.org/b/id/12676419-L.jpg",
    purchaseUrl: "https://books.catapult.co/books/body-work/",
  },
  {
    title: "The Art of Memoir",
    author: "Mary Karr (2015)",
    category: "Nonfiction Guides",
    description: "From a modern master of the form, this is a sharp, witty, and deeply insightful guide to the craft of memoir. Karr demystifies the process of turning personal history into compelling literary art.",
    imageUrl: "https://covers.openlibrary.org/b/id/8903291-L.jpg",
    purchaseUrl: "https://www.marykarr.com/the-art-of-memoir.html",
  },
  {
    title: "On Writing Well: The Classic Guide to Writing Nonfiction",
    author: "William Zinsser (1988)",
    category: "Nonfiction Guides",
    description: "A timeless and essential guide for anyone who wants to write clear, effective nonfiction. Zinsser's principles of simplicity, clarity, and humanity are a masterclass in professional writing.",
    imageUrl: "https://covers.openlibrary.org/b/id/14648445-L.jpg",
    purchaseUrl: "https://dn790000.ca.archive.org/0/items/OnWritingWell/on-writing-well.pdf",
  },
  // For Poets
  {
    title: "The Poet's Companion: A Guide to the Pleasures of Writing Poetry",
    author: "Kim Addonizio and Dorianne Laux (1997)",
    category: "For Poets",
    description: "An accessible and encouraging guide that demystifies the craft of poetry. It's packed with clear explanations of poetic elements, inspiring examples, and excellent prompts to get you writing.",
    imageUrl: "https://covers.openlibrary.org/b/id/6599072-L.jpg",
    purchaseUrl: "https://archive.org/details/poetscompaniongu00addo",
  },
  {
    title: "The Triggering Town: Lectures and Essays on Poetry and Writing",
    author: "Richard Hugo (1979)",
    category: "For Poets",
    description: "A classic collection of essays that explores the mysterious sources of poetic inspiration. Hugo encourages writers to trust their impulses and find the 'triggering' subjects that unlock their creative potential.",
    imageUrl: "https://covers.openlibrary.org/b/id/248679-L.jpg",
    purchaseUrl: "https://archive.org/details/triggeringtown00rich",
  },
  {
    title: "The Poetry Home Repair Manual",
    author: "Ted Kooser (2005)",
    category: "For Poets",
    description: "A friendly, practical, and down-to-earth guide for beginning poets. Former Poet Laureate Ted Kooser offers clear, actionable advice for improving your poems and developing your craft.",
    imageUrl: "https://unebraskapress-us.imgix.net/covers/9780803259782.jpg?auto=format&w=298&dpr=3&q=100",
    purchaseUrl: "https://www.nebraskapress.unl.edu/bison-books/9780803259782/the-poetry-home-repair-manual/",
  },
  {
    title: "The Sounds of Poetry: A Brief Guide",
    author: "Robert Pinsky (2014)",
    category: "For Poets",
    description: "Pinsky teaches poets to focus on the essential musicality of their art. This guide is a masterclass in understanding and controlling the rhythm, sound, and syntax that make a poem come alive when read aloud.",
    imageUrl: "https://covers.openlibrary.org/b/id/14649594-L.jpg",
    purchaseUrl: "https://www.pw.org/best-books/the_sounds_of_poetry_a_brief_guide",
  },
  {
    title: "A Poetry Handbook",
    author: "Mary Oliver (1994)",
    category: "For Poets",
    description: "From one of America's most beloved poets, this is a concise and wonderfully clear guide to the fundamental elements of poetry. Oliver's explanations of sound, line, and imagery are essential reading.",
    imageUrl: "https://covers.openlibrary.org/b/id/116458-L.jpg",
    purchaseUrl: "https://archive.org/details/poetryhandbook00oliv",
  },
  {
    title: "The Making of a Poem: A Norton Anthology of Poetic Forms",
    author: "edited by Mark Strand and Eavan Boland (2001)",
    category: "For Poets",
    description: "A unique anthology that teaches by example. It presents a wide variety of poetic forms—from the sonnet to the villanelle—with clear explanations and classic examples, making it an indispensable reference.",
    imageUrl: "https://covers.openlibrary.org/b/id/247540-L.jpg",
    purchaseUrl: "https://wwnorton.com/books/The-Making-of-a-Poem/",
  },
  // For Screenwriters
  {
    title: "Screenplay: The Foundations of Screenwriting",
    author: "Syd Field (2005)",
    category: "For Screenwriters",
    description: "The book that defined the three-act structure for a generation of screenwriters. Field's paradigm is a foundational concept in screenwriting, providing a clear, practical framework for structuring a story.",
    imageUrl: "https://covers.openlibrary.org/b/id/7446577-L.jpg",
    purchaseUrl: "https://sydfield.com/products/screenplay-the-foundations-of-screenwriting/",
  },
  {
    title: "Save the Cat! The Last book on Screenwriting that You'll Ever Need",
    author: "Blake Snyder (2005)",
    category: "For Screenwriters",
    description: "An incredibly influential and popular guide that introduced the 'beat sheet,' a detailed 15-step template for plotting a successful screenplay. Its practical, genre-based approach is a go-to for many writers.",
    imageUrl: "https://books.google.com/books/content?id=I1VjmAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72FdQ67C7t4JMhn4D3X-E8k8VDKLzMslfyMCR05ErwdPKE23Rcd5H41XSEAwZhoLW3gqTme3eVtfIQ0Dpfl_HcEGu82WrxhFjJYMtpTaL0ARQO_a5bpcROLdXKpp0uoYjEwiz1r",
    purchaseUrl: "https://savethecat.com/products/books/save-the-cat-the-last-book-on-screenwriting-youll-ever-need",
  },
  {
    title: "Story: Style, Structure, Substance, and the Principles of Screenwriting",
    author: "Robert McKee (1999)",
    category: "For Screenwriters",
    description: "Considered the bible of screenwriting by many, McKee's 'Story' is a deep, philosophical dive into the principles of narrative structure. It's an intensive and demanding guide for writers serious about mastering the form.",
    imageUrl: "https://covers.openlibrary.org/b/id/25530-L.jpg",
    purchaseUrl: "https://dn790001.ca.archive.org/0/items/RobertMcKeeStorypdf/Robert%20McKee%20-%20Story%20(pdf)_text.pdf",
  },
  {
    title: "Backwards & Forwards: A Technical Manual for Reading Plays",
    author: "David Ball (1983)",
    category: "For Screenwriters",
    description: "An essential text for playwrights and screenwriters that teaches how to analyze a script for its dramatic potential. Ball's method of reading 'backwards' reveals the chain of cause and effect that makes a story work.",
    imageUrl: "https://covers.openlibrary.org/b/id/594355-L.jpg",
    purchaseUrl: "https://universitypressaudiobooks.com/detail.php/470",
  },
  {
    title: "The Playwright's Guidebook: An Intimate How-To for the Theater",
    author: "Stuart Spencer (2002)",
    category: "For Screenwriters",
    description: "A comprehensive and intimate guide to the entire process of writing for the stage. Spencer covers everything from the initial impulse to the final rewrite, offering practical advice for aspiring playwrights.",
    imageUrl: "https://covers.openlibrary.org/b/id/377749-L.jpg",
    purchaseUrl: "https://us.macmillan.com/books/9780571199914/theplaywrightsguidebook/",
  },
  // Diverse Perspectives
  {
    title: "Craft in the Real World: Rethinking Fiction Writing and Workshopping",
    author: "Matthew Salesses (2021)",
    category: "Diverse Perspectives",
    description: "A vital and necessary book that challenges the traditional, often exclusionary, creative writing workshop model. Salesses offers a new framework for writing and teaching that is more inclusive and culturally aware.",
    imageUrl: "https://covers.openlibrary.org/b/id/10548790-L.jpg",
    purchaseUrl: "https://matthewsalesses.com/craft-in-the-real-world/",
  },
  {
    title: "The Breakbeat Poets: New American Poetry in the Age of Hip-Hop",
    author: "edited by Kevin Coval, Quraysh Ali Lansana, and Nate Marshall (2015)",
    category: "Diverse Perspectives",
    description: "A groundbreaking anthology that captures the rhythm, energy, and voice of the hip-hop generation. For writers, it's a powerful example of how contemporary language and culture can shape new poetic forms.",
    imageUrl: "https://poets.org/sites/default/files/images/books/Breakbeat_Cover_Stanza_0.png",
    purchaseUrl: "https://poets.org/book/breakbeat-poets-new-american-poetry-age-hip-hop",
  },
  // Career Development
  {
    title: "The Forest for the Trees: An Editor's Advice to Writers",
    author: "Betsy Lerner (2000)",
    category: "Career Development",
    description: "An invaluable insider's look at the publishing world from a seasoned editor. Lerner demystifies the author-editor relationship and provides compassionate, practical advice for navigating a literary career.",
    imageUrl: "https://covers.openlibrary.org/b/id/824379-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/333846/the-forest-for-the-trees-revised-and-updated-by-betsy-lerner/",
  },
  {
    title: "The Business of Being a Writer",
    author: "Jane Friedman (2018)",
    category: "Career Development",
    description: "An essential, no-nonsense guide to the financial and professional realities of a writing career. Friedman provides a transparent and comprehensive roadmap for turning your writing into a sustainable business.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1517870426i/35960731.jpg",
    purchaseUrl: "https://businessofwriting.org/",
  },
  // Revision & Editing
  {
    title: "Revision and Self-Editing for Publication",
    author: "James Scott Bell (2012)",
    category: "Revision & Editing",
    description: "A practical, checklist-driven guide to polishing your manuscript. Bell provides a systematic approach to revision, helping writers strengthen their plot, characters, and prose for publication.",
    imageUrl: "https://covers.openlibrary.org/b/id/7832293-L.jpg",
    purchaseUrl: "https://www.penguinrandomhouse.com/books/633780/revision-and-self-editing-for-publication-by-james-scott-bell/",
  },
  {
    title: "The First Five Pages: A Writer's Guide to Staying Out of the Rejection Pile",
    author: "Noah Lukeman (2000)",
    category: "Revision & Editing",
    description: "A literary agent's direct advice on how to hook readers—and editors—from the very first sentence. This book is an essential tool for perfecting the crucial opening pages of your manuscript.",
    imageUrl: "https://covers.openlibrary.org/b/id/428001-L.jpg",
    purchaseUrl: "https://lukeman.com/the-first-five-pages/",
  },
  {
    title: "Making Shapely Fiction",
    author: "Jerome Stern (2011)",
    category: "Revision & Editing",
    description: "An insightful guide to understanding and utilizing fictional structures and forms. Stern helps writers think critically about the 'shape' of their stories, from traditional arcs to more experimental designs.",
    imageUrl: "https://covers.openlibrary.org/b/id/7096284-L.jpg",
    purchaseUrl: "https://archive.org/details/makingshapelyfic00jero",
  },
  {
    title: "Self-Editing for Fiction Writers: How to Edit Yourself into Print",
    author: "Renni Browne and Dave King (2010)",
    category: "Revision & Editing",
    description: "A classic, hands-on guide that teaches fiction writers how to apply a professional editor's eye to their own work. Its clear examples and exercises make it an indispensable tool for revision.",
    imageUrl: "https://covers.openlibrary.org/b/id/28807-L.jpg",
    purchaseUrl: "https://www.amazon.com/Self-Editing-Fiction-Writers-Second-Yourself/dp/0060545690",
  },
];

export default function ReadingListPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const categories: string[] = [
    "All",
    ...Array.from(new Set(books.map((book) => book.category))),
  ];

  const filteredBooks =
    activeFilter === "All"
      ? books
      : books.filter((book) => book.category === activeFilter);

  // Effect to handle body scroll when modal is open/closed
  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // WCAG 2.1: On modal close, return focus to the button that opened it.
    // This is handled automatically by modern browsers but can be enhanced if needed.
  }, [selectedBook]);
  
  // Effect to handle keyboard trap for modal (WCAG 2.1 - 2.1.1 Keyboard)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedBook(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight font-display md:text-5xl lg:text-6xl">
          Essential Reading List
        </h1>
        <div className="mt-6 max-w-3xl mx-auto space-y-4 font-body text-ink/80 dark:text-canvas/80 leading-relaxed">
          <p>
            Pursuing a Master of Fine Arts in writing is more than an academic
            path; it’s an intensive journey demanding both technical mastery and
            a refined artistic vision. To navigate this challenging pursuit,
            certain books stand as indispensable guides.
          </p>
          <p className="text-sm italic">
            AI Writers’ Retreat offers these book recommendations independently.
            We receive no affiliation or sponsorship from the authors or
            booksellers mentioned.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 my-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`font-ui font-medium py-2 px-4 rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 dark:focus-visible:ring-offset-canvasDark ${
              activeFilter === category
                ? "bg-glow text-ink font-bold"
                : "bg-gray-200/80 dark:bg-gray-800/80 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {filteredBooks.map((book) => (
          <div key={book.title} className="space-y-2">
            <button
              onClick={() => setSelectedBook(book)}
              className="group w-full aspect-[2/3] bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow focus-visible:ring-offset-2 dark:focus-visible:ring-offset-canvasDark"
              aria-label={`View details for ${book.title}`}
            >
              <img
                src={book.imageUrl}
                alt={`Book cover for ${book.title}`}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                loading="lazy"
              />
            </button>
            <div className="text-center">
              <p className="font-bold font-display text-sm truncate">
                {book.title}
              </p>
              <p className="text-xs text-ink/70 dark:text-canvas/70">
                {book.author}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
          onClick={() => setSelectedBook(null)} // Close on overlay click
          role="dialog"
          aria-modal="true"
          aria-labelledby="book-modal-title"
        >
          <div
            className="bg-canvas dark:bg-canvasDark rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="relative w-full md:w-1/3 flex-shrink-0 bg-gray-100 dark:bg-gray-800 aspect-[2/3] md:aspect-auto">
              <img
                src={selectedBook.imageUrl}
                alt={`Book cover for ${selectedBook.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col overflow-y-auto relative">
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex-grow pr-8">
                <h2 id="book-modal-title" className="text-2xl font-bold font-display mb-1">
                  {selectedBook.title}
                </h2>
                <p className="text-md text-ink/70 dark:text-canvas/70 mb-4">
                  {selectedBook.author}
                </p>
                <p className="font-body leading-relaxed text-ink/90 dark:text-canvas/90">
                  {selectedBook.description}
                </p>
                {selectedBook.purchaseUrl && (
                  <a
                    href={selectedBook.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-glow text-ink font-ui font-bold py-2 px-6 rounded-full text-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}














