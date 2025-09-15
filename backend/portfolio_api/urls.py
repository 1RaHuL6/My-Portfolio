from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('profile/', views.profile),
    path('experience/', views.experience),
    path('projects/', views.project),
    path('education/', views.eduaction),
    path('skill/', views.skills),
    path('socialLinks/', views.socialLinks)
    
]
