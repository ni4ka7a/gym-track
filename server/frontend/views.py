# from django.shortcuts import render

# def index(request):
#     return render(request, 'frontend/index.html')

from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os 
from pathlib import Path

class ReactAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(Path(__file__).resolve(strict=True).parent, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )