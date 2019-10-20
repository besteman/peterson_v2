import requests
from bs4 import BeautifulSoup 

quotes = []

for i in range(1, 32):
    response = requests.get(f"https://www.goodreads.com/author/quotes/282885.Jordan_B_Peterson?page={i}")
    
    soup = BeautifulSoup(response.content, "html5lib") 

    result = soup.find_all("div", {"class":"quoteText"})

    for x in result:
        quotes.append(x.contents[0].strip())

with open("temp.txt", "w") as file:
    for x in quotes:
        file.write(x)
        file.write("\n")