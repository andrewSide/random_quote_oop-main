import { quotes, jokes } from "../data/quotes.js";
import MathUtils from "../utils/mathUtils.js";
import Quote from "./quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(jokes.length);
    const { id, text, author } = jokes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await fetch(url, options);
      const { id, quote: text, author } = await response.json();
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
