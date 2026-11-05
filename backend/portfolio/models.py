from django.db import models
from django.utils.text import slugify

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=150, blank=True)
    message = models.TextField()
    rating = models.PositiveSmallIntegerField(default=5)
    avatar = models.ImageField(
        upload_to="testimonials/",
        blank=True,
        null=True
    )
    is_approved = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = "Testimonial"
        verbose_name_plural = "Testimonials"
        
    def __str__(self):
        return f"{self.name} - {self.company or self.role}"
    

class BlogPost(models.Model):

    CATEGORY_CHOICES = [
        ("React", "React"),
        ("Django", "Django"),
        ("Python", "Python"),
        ("Full Stack", "Full Stack"),
        ("Projects", "Projects"),
        ("Technology", "Technology"),
    ]

    title = models.CharField(max_length=200)

    slug = models.SlugField(
        max_length=220,
        unique=True,
        blank=True
    )

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="Technology"
    )

    excerpt = models.TextField(max_length=500)

    content = models.TextField()

    image = models.ImageField(
        upload_to="blog/",
        blank=True,
        null=True
    )

    read_time = models.PositiveIntegerField(default=5)

    is_featured = models.BooleanField(default=False)

    is_published = models.BooleanField(default=False)

    published_at = models.DateTimeField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            unique_slug = base_slug
            counter = 1

            while BlogPost.objects.filter(
                slug=unique_slug
            ).exclude(pk=self.pk).exists():
                unique_slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = unique_slug

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
