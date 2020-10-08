from django.db import models
from django.contrib.auth.models import User

class Routine(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, related_name="routines", on_delete=models.CASCADE, null=True)
