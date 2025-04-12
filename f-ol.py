import requests
from bs4 import BeautifulSoup
import json


def clean(string):
    return string.replace('\b', '').replace('\n', '').replace('\t', '').replace('\r', '').replace('TatvaSoft', 'LetsLance').replace('tatvasoft', 'LetsLance').replace('Tatvasoft', 'LetsLance')


# print(urls)

# for a in soup.find_all('a', href=True):
# print "Found the URL:", a['href']

# print("Enter URL : ", end=" ")
# URL = input()
# URL = 'https://www.tatvasoft.com/software-development-services/software-development-services'
# urls = [a['href'] for a in soup.select('.sub-menu li a', href = True)]
# print(urls)
urls = ['https://www.tatvasoft.com/software-development-services/custom-software-development', 'https://www.tatvasoft.com/software-development-services/web-development',
    'https://www.tatvasoft.com/software-development-services/dedicated-development-team', 'https://www.tatvasoft.com/software-development-services/product-development-maintenance',
    'https://www.tatvasoft.com/software-development-services/ecommerce-development', 'https://www.tatvasoft.com/software-development-services/mobile-app-development',
    'https://www.tatvasoft.com/software-development-services/testing-qa', 'https://www.tatvasoft.com/software-development-services/ui-ux-design-services'
]

out = []

for uri in urls:
    URl = uri
    page = requests.get(URl, verify=False)
    soup = BeautifulSoup(page.content, 'html.parser')
    print(URl)

    trip_details = soup.select('.banner-content p')

    data = {}

    data['id'] = urls.index(URl) + 1

    # data["description"] = clean(trip_details[0].text)
    # data['places'] = ([clean(i.text).replace(',', '').capitalize()
    #                   for i in soup.select('.trip-duration-route .d-flex .meta-value span')])
    data['title'] = clean(soup.select(
        '.banner-content h1')[0].text)
    data['description'] = clean(soup.select(
        '.banner-content p')[0].text)

    data['codepoint'] = 'ef54'

    # data['summary'] = clean(soup.select(
    #     '.trip-highlights-intro p')[0].text)
    # data['tripFor'] = ([clean(i.text).replace(',', '').capitalize()
    #                     for i in soup.select('.perfect-trip-tips .check-list li')])
    # data['highlights'] = ([clean(i.text).replace(',', '').capitalize()
    #                        for i in soup.select('.trip-highlight-list .check-list li')])
    # data['stay'] = ([clean(i.text).replace(',', '').capitalize()
    #                  for i in soup.select('.accomodation-block')[0].select('.check-list li')])
    # data['travel'] = ([clean(i.text).replace(',', '').capitalize()
    #                   for i in soup.select('.accomodation-block')[1].select('.check-list li')])
    # data['food'] = ([clean(i.text).replace(',', '').capitalize()
    #                  for i in soup.select('.accomodation-block')[2].select('.check-list li')])
    # features = soup.select('.trip-features .feature-block')
    # data['features'] = ([{'title': i.find('h4').text, 'items': [clean(
    #     j.text).replace(',', '') for j in i.select('li')]} for i in features])
    # data['seasonalHighlights'] = [clean(i.text)
    #                               for i in soup.select('.seasonal_highlights p')]
    # faqs = soup.select('.trip-faq')[0]
    questions = [clean(i.text) for i in soup.select('.work-item-inner h3')]
    answers = [clean(i.text) for i in soup.select('.work-item-inner p')]
    data['highlights'] = [{'title': questions[i], 'description':answers[i] ,'codepoint' :'ef54'}
                    for i in range(len(questions))]
    # data['tags'] = ""
    out += [data]

with open('./public/data/services.json', 'w') as f:
    json.dump(out, f)

# print(json.dumps(out, indent=2))
