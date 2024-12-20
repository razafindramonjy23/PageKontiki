from django.db import models
from django.contrib.auth.models import User

class Candidate(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    resume = models.FileField(upload_to='resumes/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Interview(models.Model):
    STATUS_CHOICES = [
        ('pending', 'En attente'),
        ('scheduled', 'Programmé'),
        ('completed', 'Complété'),
        ('cancelled', 'Annulé'),
    ]
    
    TYPE_CHOICES = [
        ('technical', 'Technique'),
        ('hr', 'RH'),
        ('final', 'Final'),
    ]

    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE)
    interviewer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    datetime = models.DateTimeField()
    duration = models.IntegerField(help_text="Durée en minutes")
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    notes = models.TextField(blank=True)
    feedback = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-datetime']