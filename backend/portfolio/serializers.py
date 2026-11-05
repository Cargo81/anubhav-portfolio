from rest_framework import serializers
from .models import Contact, Testimonial, BlogPost


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [
            'id',
            'name',
            'email',
            'subject',
            'message',
            'created_at'
        ]
        read_only_fields = ['id', 'created_at']
        
        
class TestimonialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Testimonial

        fields = [
            "id",
            "name",
            "role",
            "company",
            "message",
            "rating",
            "avatar",
            "created_at",
        ]

        read_only_fields = fields


class BlogPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost

        fields = [
            "id",
            "title",
            "slug",
            "category",
            "excerpt",
            "content",
            "image",
            "read_time",
            "is_featured",
            "published_at",
        ]
