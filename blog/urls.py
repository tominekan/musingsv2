from django.urls import path
from . import views

urlpatterns = [
    path("", views.homePage, name="Home Page"),
    path("<uuid:articleID>", views.articlePage, name="Article Page")
]