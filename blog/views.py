from django.shortcuts import render
from .models import SingleArticle


# Create your views here.
def homePage(request):
    articles = SingleArticle.objects.all()
    return render(request, "home.html", {"articles": articles})