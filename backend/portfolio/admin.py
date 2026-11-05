from django.contrib import admin
from .models import Contact, Testimonial

# Register your models here.

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('created_at',)
    ordering = ('-created_at',)
    
@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
     list_display = (
        "name",
        "role",
        "company",
        "rating",
        "is_approved",
        "is_active",
        "created_at",
    )

     list_filter = (
        "is_approved",
        "is_active",
        "rating",
        "created_at",
    )

     search_fields = (
        "name",
        "company",
        "role",
        "message",
    )

     list_editable = (
        "is_approved",
        "is_active",
    )

     readonly_fields = (
        "created_at",
        "updated_at",
    )

     ordering = ("-created_at",)