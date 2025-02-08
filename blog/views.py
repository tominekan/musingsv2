from django.shortcuts import render, get_object_or_404
from .models import SingleArticle


# Create your views here.
def homePage(request):
    articles = SingleArticle.objects.all()
    return render(request, "home.html", {"articles": articles})

def articlePage(request, articleID):
    singleArticle = get_object_or_404(SingleArticle, articleID=articleID)

    # See this article: https://infusion.media/content-marketing/how-to-calculate-reading-time/
    numRead = max(1, round(len(singleArticle.content.split(" ")) / 200))
    return render(request, "article.html", {"article": singleArticle, "minsToRead": numRead})