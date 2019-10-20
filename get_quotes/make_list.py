quotes = []
with open("quotes.txt", "r") as file:
    for x in file:
        x = x.rstrip('\n')
        quotes.append(x)

with open("quotes_array.js", "w") as js_file:
     js_file.write(str(quotes))