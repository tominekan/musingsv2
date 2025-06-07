from django.shortcuts import render, get_object_or_404
from .models import SingleArticle
from markdown_it import MarkdownIt

# Home Page - Render all articles (might implement pagination later)
def homePage(request):
    articles = SingleArticle.objects.all()
    return render(request, "home.html", {"articles": articles})

# Article page - Renders a specific article
def articlePage(request, articleID):
    singleArticle = get_object_or_404(SingleArticle, articleID=articleID)

    # See this article: https://infusion.media/content-marketing/how-to-calculate-reading-time/
    numRead = max(1, round(len(singleArticle.content.split(" ")) / 200))
    md = MarkdownIt("js-default")
    htmlContent = md.render(singleArticle.content)
    return render(request, "article.html", {"article": singleArticle, "minsToRead": numRead, "htmlContent": htmlContent})

# About Page - Just a luh bit about myself
def aboutPage(request):
    return render(request, "about.html")