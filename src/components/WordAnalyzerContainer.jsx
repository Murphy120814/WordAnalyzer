import React, { useEffect, useState } from "react";
import InfoBar from "./InfoBar";
import TextInputContainer from "./TextInputContainer";
import Counter from "./Counter";
import { calculatingValues } from "../utils";
function WordAnalyzerContainer() {
  const [textValue, setTextValue] = useState(null);
  const [counterValues, setCounterValues] = useState({
    noOfCharacters: 0,
    noOfWords: 0,
    noOfSentences: 0,
    noOfParagraphs: 0,
    timeToRead: 0,
    longestWord: "",
  });
  useEffect(() => {
    calculatingValues(setCounterValues, textValue);
  }, [textValue]);
  return (
    <div className=" min-h-[500px] w-9/12 mx-auto mt-8 shadow-xl rounded-xl p-4 flex flex-col gap-4">
      <InfoBar>
        <Counter type={"Words"} value={counterValues.noOfWords} />
        <Counter type={"Character"} value={counterValues.noOfCharacters} />
        <Counter type={"Sentence"} value={counterValues.noOfSentences} />
        <Counter type={"Paragraph"} value={counterValues.noOfParagraphs} />
      </InfoBar>
      <TextInputContainer textValue={textValue} setTextValue={setTextValue} />
      <InfoBar>
        <Counter type={"TimeToRead"} value={counterValues.timeToRead} />
        <Counter type={"Longest Word"} value={counterValues.longestWord} />
      </InfoBar>
    </div>
  );
}

export default WordAnalyzerContainer;
