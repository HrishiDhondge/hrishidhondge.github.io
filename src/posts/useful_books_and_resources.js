import "./post.css";
import DynamicTable from "../components/Tables/DynamicTable";

const booksData = [
    {
        title: "Deep learning for molecules & materials",
        author: "Andrew D. White",
        genre: ["Deep learning", "Small molecules"],
        year: 2021,
        url: "https://livecomsjournal.org/index.php/livecoms/article/view/v3i1e1499/1377",
        urlText: "Read Book",
      },
      {
        title: "R for Health Data Science",
        author: ["Ewen Harrison", "Riinu Pius"],
        genre: ["R", "Data science"],
        year: 2021,
        url: "https://argoshare.is.ed.ac.uk/healthyr_book/",
        urlText: "Read Book",
      },
      {
        title: "The Elements of Statistical Learning",
        author: ["Trevor Hastie", "Robert Tibshirani", "Jerome Friedman"],
        genre: ["Data mining", "Inference", "Statistics"],
        year: 2021,
        url: "https://www.sas.upenn.edu/~fdiebold/NoHesitations/BookAdvanced.pdf",
        urlText: "Download Book",
      },
      {
        title: "Think Stats",
        author: ["Allen B. Downey"],
        genre: ["Statistics", "Python"],
        // year: 2021,
        url: "https://allendowney.github.io/ThinkStats/",
        urlText: "Read Book",
      },
      {
        title: "Bayesian Reasoning and Machine Learning",
        author: ["David Barber"],
        genre: ["Machine learning"],
        year: 2016,
        url: "http://web4.cs.ucl.ac.uk/staff/D.Barber/textbook/091117.pdf",
        urlText: "Download Book",
      },
      {
        title: "Introduction to Machine Learning with Python",
        author: ["Andreas C Muller", "Sarah Guido"],
        genre: ["Machine learning", "Python"],
        year: 2017,
        url: "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf",
        urlText: "Download Book",
      },
      {
        title: "Understanding Machine Learning",
        author: [" Shai Shalev-Shwartz", "Shai Ben-David"],
        genre: ["Machine learning", "Algorithms"],
        year: 2014,
        url: "https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/index.html",
        urlText: "Check Online",
      },
      {
        title: "A Programmer's Guide to Data Mining",
        author: ["Ron Zacharski"],
        genre: ["Data mining", "Programming"],
        year: 2015,
        url: "http://guidetodatamining.com/",
        urlText: "Read Book",
      },
      {
        title: "Mining of Massive Datasets",
        author: ["Jure Leskovec", "Anand Rajaraman", "Jeffrey D. Ullman"],
        genre: ["Data mining", "Algorithms"],
        year: 2010,
        url: "http://www.mmds.org/",
        urlText: "Download Book",
      },
      {
        title: "A Brief Introduction to Neural Networks ",
        author: ["David Kriesel"],
        genre: ["Neural networks", "Python"],
        // year: 2021,
        url: "https://www.dkriesel.com/_media/science/neuronalenetze-en-zeta2-2col-dkrieselcom.pdf",
        urlText: "Download Book",
      },
      {
        title: "Deep Learning",
        author: ["Ian Goodfellow", "Yoshua Bengio", "Aaron Courville"],
        genre: ["Deep learning", "Python"],
        // year: 2021,
        url: "https://www.deeplearningbook.org/",
        urlText: "Read Book",
      },
      {
        title: "Natural Language Processing with Python",
        author: ["Steven Bird", "Ewan Klein", "Edward Loper"],
        genre: ["NLP", "Python"],
        year: 2009,
        url: "https://www.researchgate.net/publication/220691633_Natural_Language_Processing_with_Python",
        urlText: "Get Access",
      },
      {
        title: "Machine Learning Yearning ",
        author: ["Andrew NG"],
        genre: ["Machine learning", "Python"],
        year: 2025,
        url: "https://info.deeplearning.ai/machine-learning-yearning-book",
        urlText: "Download Book",
      },
      {
        title: "Machine Learning For Absolute Beginners",
        author: ["Oliver Theobald"],
        genre: ["Machine learning"],
        // year: ,
        url: "https://mrce.in/ebooks/Machine%20Learning%20for%20Absolute%20Beginners.pdf",
        urlText: "Download Book"
      },
      {
        title: "Mathematics for Machine Learning",
        author: "Marc Peter",
        genre: ["Mathematics", "Machine learning"],
        year: 2020,
        url: "https://mml-book.github.io/book/mml-book.pdf",
        urlText: "Download Book"
      },
      {
        title: "Machine Learning",
        author: "Tom Mitchell",
        year: 1997,
        url: "https://www.cs.cmu.edu/~tom/mlbook.html",
        urlText: "Download Book"
      },
      {
        title: "Data Science and Machine Learning",
        author: ["Dirk P. Kroese", "Zdravko I. Botev", "Thomas Taimre", "Radislav Vaisman"],
        year: 2024,
        url: "https://people.smp.uq.edu.au/DirkKroese/DSML/DSML.pdf",
        urlText: "Download Book"
      },
      {
        title: "Neural Networks and Deep Learning",
        author: "Michael Nielsen",
        year: 2019,
        url: "http://neuralnetworksanddeeplearning.com/",
        urlText: "Read Book"
      },
      {
        title: "The Hundred-Page Machine Learning Book",
        author: "Andriy Burkov",
        // year: 
        url: "http://ema.cri-info.cm/wp-content/uploads/2019/07/2019BurkovTheHundred-pageMachineLearning.pdf",
        urlText: "Download Book"
      }
];

const columns = [
  { key: "title", label: "📖 Title" },
  { key: "author", label: "✍️ Author",
    render: (value) => (Array.isArray(value) ? value.join(", ") : value),
   },
  {
    key: "url",
    label: "🔗 Source",
    // Custom URL renderer: use row.urlText as the link text; fallback to 'Open'
    render: (value, row) => (
      <a href={value} target="_blank" rel="noreferrer">
        {row.urlText || "Open"}
      </a>
    ),
  },
  {
    key: "genre",
    label: "🏷️ Genres",
    render: (value) => (Array.isArray(value) ? value.join(", ") : value),
  },
  { key: "year", label: "📅 Year" },
];

const tablePost = {
  slug: "free-and-useful-resources",
  title: "Free and Useful Resources to Upskill Yourself",
  author: "Hrishikesh Dhondge",
  date: "2025-08-23",
  tags: ["book", "resource"],
  summary:
    "A curated collection of free ebooks to help you learn new skills or upskill yourself.",
  content: (
    <>
      <p>
      I often stumble upon amazing books and learning resources, but I tend to lose track of them over time. 
      So, I thought I’d make a little home for them here. 
      This post is basically my personal stash of useful books that I can come back to whenever I need.
      And if it helps someone else discover something new along the way, even better!
      </p>
      <DynamicTable
        data={booksData}
        columns={columns}
        pageSize={20}
        selectionMode="single" // "multiple" or "single"
      />
    </>
  ),
};

export default tablePost;
