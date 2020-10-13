from django.db import models
from django.contrib.auth.models import User

CATEGORY_CHOICES = (
    ("BR", "Barbel"),
    ("DM", "Dumbbell"),
    ("MA", "Machine"),
    ("CA", "Cardio"),
    ("WB", "Weighted Bodyweight")
)

BODY_PART_CHOICES = (
    ("CO", "Core"),
    ("AR", "Arms"),
    ("BA", "Back"),
    ("CH", "Chest"),
    ("LE", "Legs"),
    ("SH", "Shoulders"),
    ("OT", "Other"),
    ("FB", "Full Body"),
    ("CA", "Cardio"),
)

class Exercise(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True)
    category = models.CharField(
        max_length=2, choices=CATEGORY_CHOICES, default="BR")
    # TODO: rename to bodyPart and add migration
    bodypart = models.CharField(
        max_length=2, choices=BODY_PART_CHOICES, default="CO")
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, related_name="exercises", on_delete=models.CASCADE, null=True)
