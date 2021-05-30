# -*- coding: utf-8 -*-

from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals

from sumy.parsers.html import HtmlParser
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words
import nltk



LANGUAGE = "english"

class AutomaticSummarization(object):
    def __init__(self, lecture_file):
            self.lecture_file = lecture_file
            self.sentence = ""

    def sentence_ratio(self):
        sentences = 0
        file = open(self.lecture_file, "r")
        for line in file:
            #print(line)   # test
            if not line.startswith('\n'):
                sentences += line.count('.') + line.count('!') + line.count('?')
        return (sentences//2)

    def summarizer(self):
        parser = PlaintextParser.from_file(self.lecture_file, Tokenizer(LANGUAGE))
        
        stemmer = Stemmer(LANGUAGE)

        summarizer = Summarizer(stemmer)
        summarizer.stop_words = get_stop_words(LANGUAGE)
        
        ratio = self.sentence_ratio()

        for sentence in summarizer(parser.document, ratio):
            self.sentence += " " + str(sentence)

    def return_sentence(self):
        print(self.sentence)
        return self.sentence

def main(): 
    summarization = AutomaticSummarization("sample.txt")
    summarization.summarizer()
    summarization.return_sentence()

if __name__ == "__main__":
    main()
#