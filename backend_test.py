#!/usr/bin/env python3
"""
FACTUM RESEARCH Backend API Test Suite
Tests all backend endpoints for the FACTUM RESEARCH website
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend/.env
BASE_URL = "https://factum-research-1.preview.emergentagent.com/api"

# Test data as specified in the review request
TEST_USER_DATA = {
    "name": "Test",
    "surname": "User", 
    "email": "testfinal@factum.com",
    "password": "test1234",
    "age": 28,
    "country": "India",
    "gender": "male"
}

TEST_CONTACT_DATA = {
    "name": "Contact Test",
    "email": "contact@test.com", 
    "company": "Test Co",
    "message": "Testing contact form"
}

ADMIN_PASSWORD = "admin123"

class FactumAPITester:
    def __init__(self):
        self.session = requests.Session()
        self.user_token = None
        self.admin_token = None
        self.test_results = []
        
    def log_test(self, test_name, success, details="", response_data=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        if response_data and not success:
            print(f"   Response: {response_data}")
        print()
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat()
        })
    
    def test_user_signup(self):
        """Test POST /api/auth/signup"""
        print("🔍 Testing User Signup...")
        try:
            response = self.session.post(
                f"{BASE_URL}/auth/signup",
                json=TEST_USER_DATA,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code in [200, 201]:
                data = response.json()
                if "message" in data and "user" in data:
                    self.log_test("User Signup", True, f"Status: {response.status_code}, Message: {data['message']}")
                    return True
                else:
                    self.log_test("User Signup", False, f"Invalid response structure", data)
                    return False
            else:
                self.log_test("User Signup", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("User Signup", False, f"Exception: {str(e)}")
            return False
    
    def test_user_login(self):
        """Test POST /api/auth/login"""
        print("🔍 Testing User Login...")
        try:
            login_data = {
                "email": TEST_USER_DATA["email"],
                "password": TEST_USER_DATA["password"]
            }
            
            response = self.session.post(
                f"{BASE_URL}/auth/login",
                json=login_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if "access_token" in data and "user" in data:
                    self.user_token = data["access_token"]
                    self.log_test("User Login", True, f"Token received, User: {data['user']['email']}")
                    return True
                else:
                    self.log_test("User Login", False, "Missing access_token or user in response", data)
                    return False
            else:
                self.log_test("User Login", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("User Login", False, f"Exception: {str(e)}")
            return False
    
    def test_get_current_user(self):
        """Test GET /api/auth/me"""
        print("🔍 Testing Get Current User...")
        if not self.user_token:
            self.log_test("Get Current User", False, "No user token available")
            return False
            
        try:
            headers = {
                "Authorization": f"Bearer {self.user_token}",
                "Content-Type": "application/json"
            }
            
            response = self.session.get(f"{BASE_URL}/auth/me", headers=headers)
            
            if response.status_code == 200:
                data = response.json()
                if "email" in data and data["email"] == TEST_USER_DATA["email"]:
                    self.log_test("Get Current User", True, f"User profile retrieved: {data['email']}")
                    return True
                else:
                    self.log_test("Get Current User", False, "Invalid user data returned", data)
                    return False
            else:
                self.log_test("Get Current User", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Get Current User", False, f"Exception: {str(e)}")
            return False
    
    def test_contact_form(self):
        """Test POST /api/contact/submit"""
        print("🔍 Testing Contact Form...")
        try:
            response = self.session.post(
                f"{BASE_URL}/contact/submit",
                json=TEST_CONTACT_DATA,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code in [200, 201]:
                data = response.json()
                if "message" in data and "submission_id" in data:
                    self.log_test("Contact Form", True, f"Status: {response.status_code}, ID: {data['submission_id']}")
                    return True
                else:
                    self.log_test("Contact Form", False, "Invalid response structure", data)
                    return False
            else:
                self.log_test("Contact Form", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Contact Form", False, f"Exception: {str(e)}")
            return False
    
    def test_admin_login(self):
        """Test POST /api/admin/login"""
        print("🔍 Testing Admin Login...")
        try:
            admin_data = {"password": ADMIN_PASSWORD}
            
            response = self.session.post(
                f"{BASE_URL}/admin/login",
                json=admin_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if "access_token" in data:
                    self.admin_token = data["access_token"]
                    self.log_test("Admin Login", True, "Admin token received")
                    return True
                else:
                    self.log_test("Admin Login", False, "Missing access_token in response", data)
                    return False
            else:
                self.log_test("Admin Login", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Admin Login", False, f"Exception: {str(e)}")
            return False
    
    def test_admin_get_users(self):
        """Test GET /api/admin/users"""
        print("🔍 Testing Admin Get Users...")
        if not self.admin_token:
            self.log_test("Admin Get Users", False, "No admin token available")
            return False
            
        try:
            headers = {
                "Authorization": f"Bearer {self.admin_token}",
                "Content-Type": "application/json"
            }
            
            response = self.session.get(f"{BASE_URL}/admin/users", headers=headers)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    user_count = len(data)
                    # Check if our test user is in the list
                    test_user_found = any(user.get("email") == TEST_USER_DATA["email"] for user in data)
                    if test_user_found:
                        self.log_test("Admin Get Users", True, f"Retrieved {user_count} users, test user found")
                    else:
                        self.log_test("Admin Get Users", True, f"Retrieved {user_count} users, test user not found (may be expected)")
                    return True
                else:
                    self.log_test("Admin Get Users", False, "Response is not a list", data)
                    return False
            else:
                self.log_test("Admin Get Users", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Admin Get Users", False, f"Exception: {str(e)}")
            return False
    
    def test_admin_get_contacts(self):
        """Test GET /api/admin/contacts"""
        print("🔍 Testing Admin Get Contacts...")
        if not self.admin_token:
            self.log_test("Admin Get Contacts", False, "No admin token available")
            return False
            
        try:
            headers = {
                "Authorization": f"Bearer {self.admin_token}",
                "Content-Type": "application/json"
            }
            
            response = self.session.get(f"{BASE_URL}/admin/contacts", headers=headers)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    contact_count = len(data)
                    # Check if our test contact is in the list
                    test_contact_found = any(contact.get("email") == TEST_CONTACT_DATA["email"] for contact in data)
                    if test_contact_found:
                        self.log_test("Admin Get Contacts", True, f"Retrieved {contact_count} contacts, test contact found")
                    else:
                        self.log_test("Admin Get Contacts", True, f"Retrieved {contact_count} contacts, test contact not found (may be expected)")
                    return True
                else:
                    self.log_test("Admin Get Contacts", False, "Response is not a list", data)
                    return False
            else:
                self.log_test("Admin Get Contacts", False, f"Status: {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Admin Get Contacts", False, f"Exception: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all backend API tests"""
        print("🚀 Starting FACTUM RESEARCH Backend API Tests")
        print(f"🌐 Testing against: {BASE_URL}")
        print("=" * 60)
        
        # Test sequence as specified in review request
        tests = [
            self.test_user_signup,
            self.test_user_login,
            self.test_get_current_user,
            self.test_contact_form,
            self.test_admin_login,
            self.test_admin_get_users,
            self.test_admin_get_contacts
        ]
        
        passed = 0
        total = len(tests)
        
        for test in tests:
            if test():
                passed += 1
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests PASSED! Backend API is working correctly.")
            return True
        else:
            print(f"⚠️  {total - passed} tests FAILED. Check the details above.")
            return False
    
    def print_summary(self):
        """Print detailed test summary"""
        print("\n📋 Detailed Test Summary:")
        print("-" * 40)
        for result in self.test_results:
            status = "✅" if result["success"] else "❌"
            print(f"{status} {result['test']}")
            if result["details"]:
                print(f"   {result['details']}")
        print("-" * 40)

def main():
    """Main test execution"""
    tester = FactumAPITester()
    
    try:
        success = tester.run_all_tests()
        tester.print_summary()
        
        # Exit with appropriate code
        sys.exit(0 if success else 1)
        
    except KeyboardInterrupt:
        print("\n🛑 Tests interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n💥 Unexpected error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()