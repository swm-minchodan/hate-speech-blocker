from konlpy.tag import Okt
from tensorflow import keras
import pickle
import os

okt = Okt()
k_tokenizer = pickle.load(open(os.path.join("./","keras_tokenizer.pkl"), "rb"))
model = keras.models.load_model("./hate_model.h5")


def tokenize(doc):
    return [okt.pos(doc, norm=True, stem=True)]


def hate_evaluate(string):
    data = tokenize(string)
    words = []
    for x in data[0]:
        if x[1] not in ['Josa'] and x[1] not in ['Punctuation']:
            words.append(x[0])
    print(words)
    sequences = k_tokenizer.texts_to_sequences([words])
    x = keras.preprocessing.sequence.pad_sequences(sequences, maxlen=100)
    
    pred_test = model.predict(x,verbose=1)
    return (1 - pred_test)*100