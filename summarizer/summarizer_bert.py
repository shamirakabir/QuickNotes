from summarizer import Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.parsers.plaintext import PlaintextParser
from sumy.utils import get_stop_words
from sumy.nlp.tokenizers import Tokenizer
from formatter import Formatter

LANGUAGE = 'english'

class BertSummarizer(object):
    def __init__(self, lecture_file):
        self.lecture_file = lecture_file
        #self.result = ''
        self.result = open("res.txt", "w")
    
    def sentence_ratio(self):
        sentences = 0
        file = open(self.lecture_file, "r")
        for line in file:
            #print(line)   # test
            if not line.startswith('\n'):
                sentences += line.count('.') + line.count('!') + line.count('?')
        return (sentences//(2 * 1.24))

    def summary(self):
        parser = PlaintextParser.from_file(self.lecture_file, Tokenizer(LANGUAGE))
        
        stemmer = Stemmer(LANGUAGE)

        summarizer = Summarizer(stemmer)
        summarizer.stop_words = get_stop_words(LANGUAGE)
        
        ratio = self.sentence_ratio()
        
        for sentence in summarizer(parser.document, sentences_count=ratio):
            #self.result += " " + str(sentence)
            self.result.write(str(sentence))
            self.result.write("\n")
        #self.result.close()
    
    def result_summary(self):
        self.result.close();
        format = Formatter("res.txt");
        format.bullet_list();
        return format.save_docx();
        # self.result.close();
        # return self.result

def main(): 
    summarization = BertSummarizer("lecture_notes.txt")
    summarization.summary()
    print(summarization.result_summary())

if __name__ == "__main__":
    main()