from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Profile, Experience, Education, Skill, Project, SocialLink
from .serializer import (
    ProfileSerializer,
    ExperienceSerializer,
    EducationSerializer,
    SkillSerializer,
    ProjectSerializer,
    SocialLinkSerializer
)

@api_view(['GET'])
def profile(request):
    
    profiles  = Profile.objects.first()
    
    return Response(ProfileSerializer(profiles).data)

@api_view(['GET'])
def experience(request):
    experiences = Experience.objects.all()
    
    serializer = ExperienceSerializer(experiences, many = True)
    
    return Response(serializer.data)

@api_view(['GET'])
def project(request):
    
    projects = Project.objects.all()
    
    serializer = ProjectSerializer(projects,many = True)
    
    return Response(serializer.data)

@api_view(['GET'])
def eduaction(request):
    education_list =  Education.objects.all().order_by('-end_year')
    
    serializer = EducationSerializer(education_list, many= True)
    
    return Response(serializer.data)

@api_view(['GET'])
def skills(request):
    skills_list = Skill.objects.all().order_by('-proficiency')
    
    serializer = SkillSerializer(skills_list,many=True)

    return Response(serializer.data)    

@api_view(['GET'])
def socialLinks(request):
    Social = SocialLink.objects.all()
    
    serializer = SocialLinkSerializer(Social,many=True)

    return Response(serializer.data)    
    

