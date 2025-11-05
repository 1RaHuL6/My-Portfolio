from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.TextField()
    email = models.EmailField()

    def __str__(self):
        return self.name

class Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    currently_working = models.BooleanField(default=False)
    description = models.TextField()
    image_url = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.role} at {self.company}"

class Education(models.Model):
    degree = models.CharField(max_length=100)
    institution = models.CharField(max_length=100)
    start_year = models.IntegerField()
    end_year = models.IntegerField()
    details = models.TextField(blank=True)
    image_url = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.degree

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('devops', 'DevOps'),
        ('database', 'Database'),
        ('other', 'Other')
    ]
    name = models.CharField(max_length=50)
    proficiency = models.IntegerField(help_text="1-5 scale") 
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image_url = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    tech_stack = models.CharField(max_length=200)
    image_url = models.CharField(max_length=255, blank=True)
    github_url = models.URLField()
    live_demo_url = models.URLField(blank=True)
    

    def __str__(self):
        return self.title

class SocialLink(models.Model):
    PLATFORM_CHOICES = [
        ('linkedin', 'LinkedIn'),
        ('github', 'GitHub'),
        ('twitter', 'Twitter/X'),
        ('instagram', 'Instagram'),
        ('email', 'Email')
    ]
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    url = models.URLField()
    icon_class = models.CharField(max_length=50, default='fas fa-link')  
    

    def __str__(self):
        return self.platform


class VisitorLead(models.Model):
    name = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    user_agent = models.TextField(blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        display = self.email or self.name or "Anonymous Visitor"
        return f"Lead: {display}"