from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'indexpage/index.html')


def about_us(request):
    return render(request, 'indexpage/about.html')
